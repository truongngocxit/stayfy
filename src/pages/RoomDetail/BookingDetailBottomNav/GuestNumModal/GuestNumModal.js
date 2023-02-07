import styles from "./GuestNumModal.module.scss";
import GuestNumberDropdown from "../../../../components/SearchBar/GuestNumberDropdown/GuestNumberDropdown";
import { createPortal } from "react-dom";
import Overlay from "../../../../components/UI/Overlay/Overlay";
import useGuestNum from "../../../../custom-hooks/useGuestNum";
import { useDispatch, useSelector } from "react-redux";
import { searchQueryActions } from "../../../../redux-store/searchQuerySlice";

const GuestNumModal = function ({ onCloseModal }) {
  const reduxDispatch = useDispatch();
  const {
    adults: reduxAdults,
    children: reduxChildren,
    babies: reduxBabies,
    animals: reduxAnimals,
  } = useSelector((state) => state.search.guestNum);

  const adultsNumData = useGuestNum(7, reduxAdults || 1);
  const childrenNumData = useGuestNum(7, reduxChildren || 0);
  const babiesNumData = useGuestNum(5, reduxBabies || 0);
  const animalsNumData = useGuestNum(3, reduxAnimals || 0);

  const { guestNum: adultsNum } = adultsNumData;
  const { guestNum: childrenNum } = childrenNumData;
  const { guestNum: babiesNum } = babiesNumData;
  const { guestNum: animalsNum } = animalsNumData;

  const handleAddGuestNum = function () {
    reduxDispatch(
      searchQueryActions.setGuestNum({
        adults: adultsNum,
        children: childrenNum,
        babies: babiesNum,
        animals: animalsNum,
      })
    );
  };

  const handleAddGuests = function () {
    handleAddGuestNum();
    onCloseModal();
  };

  const { guestNum } = styles;
  return (
    <>
      <div className={guestNum}>
        <GuestNumberDropdown
          adultsData={adultsNumData}
          babiesData={childrenNumData}
          childrenData={babiesNumData}
          animalsData={animalsNumData}
          onOk={handleAddGuests}
        />
      </div>
      {createPortal(
        <Overlay zIndex={1200} onClick={onCloseModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default GuestNumModal;
