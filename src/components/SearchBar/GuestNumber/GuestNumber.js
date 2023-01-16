import styles from "./GuestNumber.module.scss";
import GuestNumberDropdown from "../GuestNumberDropdown/GuestNumberDropdown";
import useDropdown from "../../../custom-hooks/useDropdown";

const GuestNumber = function ({ className }) {
  const { dropdownIsVisible, dropdownRef, handleOpenDropdown } = useDropdown();
  const { guestNum } = styles;
  return (
    <div
      className={`${guestNum} ${className}`}
      onClick={handleOpenDropdown}
      ref={dropdownRef}
    >
      <button>Add guests</button>
      {dropdownIsVisible && <GuestNumberDropdown style={{ width: "300%" }} />}
    </div>
  );
};

export default GuestNumber;
