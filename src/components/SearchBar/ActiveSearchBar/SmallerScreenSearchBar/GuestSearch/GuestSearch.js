import styles from "./GuestSearch.module.scss";
import GuestNumberDropdown from "../../../GuestNumberDropdown/GuestNumberDropdown";
import { useContext } from "react";
import GuestNumberContext from "../../../../../contexts/searchContext/GuestNumberContextProvider";

const GuestSearch = function () {
  const {
    resetContext: resetNumContext,
    adultsNumContextSlice,
    childrenNumContextSlice,
    babiesNumContextSlice,
    animalsNumContextSlice,
  } = useContext(GuestNumberContext);

  const { guestNum: adultsNum } = adultsNumContextSlice;

  const { guestNum: childrenNum } = childrenNumContextSlice;

  const { guestNum: babiesNum } = babiesNumContextSlice;

  const { guestNum: animalsNum } = animalsNumContextSlice;

  const totalGuests = adultsNum + childrenNum + babiesNum + animalsNum;
  let btnLabel;
  if (totalGuests === 0) {
    btnLabel = "Add guests";
  }
  if (totalGuests === 1) {
    btnLabel = `${totalGuests} guest`;
  }
  if (totalGuests > 1) {
    btnLabel = `${totalGuests} guests`;
  }
  if (adultsNum > 0 && childrenNum > 0) {
    btnLabel = `${adultsNum + childrenNum} guests`;
  }
  const { guest } = styles;
  return (
    <div>
      <GuestNumberDropdown
        hasOkButton={false}
        adultsData={adultsNumContextSlice}
        babiesData={babiesNumContextSlice}
        childrenData={childrenNumContextSlice}
        animalsData={animalsNumContextSlice}
      />
    </div>
  );
};

export default GuestSearch;
