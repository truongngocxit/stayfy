import styles from "./GuestNumber.module.scss";
import GuestNumberDropdown from "../GuestNumberDropdown/GuestNumberDropdown";
import useDropdown from "../../../custom-hooks/useDropdown";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";
import { useContext } from "react";
import GuestNumberContext from "../../searchContext/GuestNumberContextProvider";

const GuestNumber = function ({ className, activeClassName }) {
  const { dropdownIsVisible, dropdownRef, handleOpenDropdown } = useDropdown();
  const {
    resetContext: resetNumContext,
    adultsNumContextSlice: { guestNum: adultsNum },
    childrenNumContextSlice: { guestNum: childrenNum },
    babiesNumContextSlice: { guestNum: babiesNum },
    animalsNumContextSlice: { guestNum: animalsNum },
  } = useContext(GuestNumberContext);

  const totalGuests = adultsNum + childrenNum + babiesNum + animalsNum;

  let btnLabel;

  if (totalGuests === 0) {
    btnLabel = "Add guests";
  }

  if (totalGuests === 1) {
    btnLabel = `${totalGuests} guest`;
  }

  if (adultsNum > 0 || childrenNum > 0) {
    btnLabel = `${adultsNum + childrenNum} guests`;
  }

  const { guestNum, guestNum__ZeroGuest, guestNum__Label, guestNum__CloseBtn } =
    styles;
  return (
    <div
      className={`${guestNum} ${
        totalGuests === 0 ? guestNum__ZeroGuest : ""
      } ${className} ${dropdownIsVisible ? activeClassName : ""}`}
      onClick={handleOpenDropdown}
      ref={dropdownRef}
    >
      <span className={guestNum__Label}>{btnLabel}</span>
      {dropdownIsVisible && (
        <button className={guestNum__CloseBtn} onClick={resetNumContext}>
          <CloseIcon />
        </button>
      )}

      {dropdownIsVisible && <GuestNumberDropdown style={{ width: "220%" }} />}
    </div>
  );
};

export default GuestNumber;
