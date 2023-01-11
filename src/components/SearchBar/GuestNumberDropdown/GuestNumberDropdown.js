import styles from "./GuestNumberDropdown.module.scss";
import GuestTypeInput from "./GuestTypeInput";
import { forwardRef } from "react";

const GuestNumberDropdown = forwardRef(function ({ style }, ref) {
  const { guestNumberDropdown } = styles;

  return (
    <div className={guestNumberDropdown} ref={ref} style={style}>
      <GuestTypeInput
        typeName="Adults"
        typeCondition="13 years of age or higher"
      />
      <GuestTypeInput typeName="Children" typeCondition="From 2 - 12 of ages" />
      <GuestTypeInput typeName="Babies" typeCondition="Under 2 years of age" />
      <GuestTypeInput typeName="Animals" typeCondition="Only cats and dogs" />
    </div>
  );
});

export default GuestNumberDropdown;
