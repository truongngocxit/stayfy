import styles from "./GuestNumber.module.scss";
import GuestNumberDropdown from "../GuestNumberDropdown/GuestNumberDropdown";
import useDropdown from "../../../custom-hooks/useDropdown";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";
import { useContext, forwardRef } from "react";
import GuestNumberContext from "../../../searchContext/GuestNumberContextProvider";

const GuestNumber = function ({ className, activeClassName }, ref) {
  const { dropdownIsVisible, dropdownRef, containerRef, handleOpenDropdown } =
    useDropdown();
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

  const {
    guestNum,
    guestNum__ZeroGuest,
    guestNum__Label,
    guestNum__CloseBtn,
    guestNum__Modal,
  } = styles;

  return (
    <div
      className={`${guestNum} ${
        totalGuests === 0 ? guestNum__ZeroGuest : ""
      } ${className} ${dropdownIsVisible ? activeClassName : ""}`}
      onClick={handleOpenDropdown}
      ref={containerRef}
    >
      <span className={guestNum__Label} ref={ref}>
        {btnLabel}
      </span>
      {dropdownIsVisible && (
        <button className={guestNum__CloseBtn} onClick={resetNumContext}>
          <CloseIcon />
        </button>
      )}

      {dropdownIsVisible && (
        <GuestNumberDropdown
          ref={dropdownRef}
          className={guestNum__Modal}
          adultsData={adultsNumContextSlice}
          babiesData={babiesNumContextSlice}
          childrenData={childrenNumContextSlice}
          animalsData={animalsNumContextSlice}
        />
      )}
    </div>
  );
};

export default forwardRef(GuestNumber);
