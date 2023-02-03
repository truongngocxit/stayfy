import styles from "./GuestNumAdjustModal.module.scss";
import GuestNumberDropdown from "../../../../../components/SearchBar/GuestNumberDropdown/GuestNumberDropdown";
import useGuestNum from "../../../../../custom-hooks/useGuestNum";
import { useSelector, useDispatch } from "react-redux";
import { bookingInfoActions } from "../../../../../redux-store/bookingInfoSlice";

const GuestNumAdjustModal = function ({ onCloseGuestNumModal }) {
  const reduxDispatch = useDispatch();
  const { adults, children, babies, animals } = useSelector(
    (state) => state.bookingInfo.roomInfo.guests
  );

  const adultsData = useGuestNum(7, adults);
  const childrenData = useGuestNum(7, children);
  const babiesData = useGuestNum(5, babies);
  const animalsData = useGuestNum(3, animals);

  const handleSaveNewGuestNum = function () {
    reduxDispatch(
      bookingInfoActions.replaceGuestNum({
        adults: adultsData.guestNum,
        children: childrenData.guestNum,
        babies: babiesData.guestNum,
        animals: animalsData.guestNum,
      })
    );
    onCloseGuestNumModal();
  };

  const {
    guestNumModal,
    guestNumModal__Header,
    guestNumModal__Modal,
    guestNumModal__Footer,
    guestNumModal__Footer__Cancel,
    guestNumModal__Footer__Save,
  } = styles;
  return (
    <div className={guestNumModal}>
      <header className={guestNumModal__Header}>
        <h2>Number of Guests</h2>
      </header>
      <GuestNumberDropdown
        className={guestNumModal__Modal}
        adultsData={adultsData}
        childrenData={childrenData}
        babiesData={babiesData}
        animalsData={animalsData}
        hasOkButton={false}
      />
      <div className={guestNumModal__Footer}>
        <button
          className={guestNumModal__Footer__Cancel}
          onClick={onCloseGuestNumModal}
        >
          Cancel
        </button>
        <button
          className={guestNumModal__Footer__Save}
          onClick={handleSaveNewGuestNum}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default GuestNumAdjustModal;
