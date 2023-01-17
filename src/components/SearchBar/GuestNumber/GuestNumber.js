import styles from "./GuestNumber.module.scss";
import GuestNumberDropdown from "../GuestNumberDropdown/GuestNumberDropdown";
import useDropdown from "../../../custom-hooks/useDropdown";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";

const GuestNumber = function ({ className, activeClassName }) {
  const { dropdownIsVisible, dropdownRef, handleOpenDropdown } = useDropdown();
  const { guestNum, guestNum__Label, guestNum__CloseBtn } = styles;
  return (
    <div
      className={`${guestNum} ${className} ${
        dropdownIsVisible ? activeClassName : ""
      }`}
      onClick={handleOpenDropdown}
      ref={dropdownRef}
    >
      <span className={guestNum__Label}>Add guests</span>
      <button className={guestNum__CloseBtn}>
        <CloseIcon />
      </button>

      {dropdownIsVisible && <GuestNumberDropdown style={{ width: "220%" }} />}
    </div>
  );
};

export default GuestNumber;
