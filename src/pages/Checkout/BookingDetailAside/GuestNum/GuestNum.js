import styles from "./GuestNum.module.scss";
import EditIcon from "../../../../components/UI/SVG/EditIcon";

const GuestNum = function ({ guests }) {
  let babiesNumText, animalsNumText;
  const { adults, children, babies, animals } = guests;

  if (babies === 1) {
    babiesNumText = "1 baby";
  } else if (babies > 1) {
    babiesNumText = `${babies} babies`;
  }

  if (animals === 1) {
    animalsNumText = "1 animal";
  } else if (animals > 1) {
    animalsNumText = `${animals} animals`;
  }

  const { guestNum, guestNum__Label, guestNum__Num, guestNum__EditIcon } =
    styles;
  return (
    <div className={guestNum}>
      <div className={guestNum__EditIcon}>
        <EditIcon />
      </div>
      <span className={guestNum__Label}>Guests</span>
      <span className={guestNum__Num}>
        {adults + children} guests{babies !== 0 ? `, ${babiesNumText}` : ""}
        {animals !== 0 ? `, ${animalsNumText}` : ""}
      </span>
    </div>
  );
};

export default GuestNum;
