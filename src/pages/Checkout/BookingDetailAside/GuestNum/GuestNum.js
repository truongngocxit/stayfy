import styles from "./GuestNum.module.scss";
import EditIcon from "../../../../components/UI/SVG/EditIcon";

const GuestNum = function () {
  const { guestNum, guestNum__Label, guestNum__Num, guestNum__EditIcon } =
    styles;
  return (
    <div className={guestNum}>
      <div className={guestNum__EditIcon}>
        <EditIcon />
      </div>
      <span className={guestNum__Label}>Guests</span>
      <span className={guestNum__Num}>2 guests, 1 baby</span>
    </div>
  );
};

export default GuestNum;
