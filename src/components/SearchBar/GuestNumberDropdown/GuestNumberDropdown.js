import styles from "./GuestNumberDropdown.module.scss";
import GuestTypeInput from "./GuestTypeInput/GuestTypeInput";
import { forwardRef } from "react";
import useGuestNum from "../../../custom-hooks/useGuestNum";

const GuestNumberDropdown = forwardRef(function ({ style }, ref) {
  const {
    guestNum: adultsNum,
    guestNumIsTooHigh: adultsNumIsTooHigh,
    guestNumIsTooLow: adultsNumIsTooLow,
    handleDecreaseNum: handleDecreaseAdultsNum,
    handleIncreaseNum: handleIncreaseAdultsNum,
  } = useGuestNum(7);

  const {
    guestNum: childrenNum,
    guestNumIsTooHigh: childrenNumIsTooHigh,
    guestNumIsTooLow: childrenNumIsTooLow,
    handleDecreaseNum: handleDecreaseChildrenNum,
    handleIncreaseNum: handleIncreaseChildrenNum,
  } = useGuestNum(7);

  const {
    guestNum: babiesNum,
    guestNumIsTooHigh: babiesNumIsTooHigh,
    guestNumIsTooLow: babiesNumIsTooLow,
    handleDecreaseNum: handleDecreaseBabiesNum,
    handleIncreaseNum: handleIncreaseBabiesNum,
  } = useGuestNum(7);

  const {
    guestNum: animalsNum,
    guestNumIsTooHigh: animalsNumIsTooHigh,
    guestNumIsTooLow: animalsNumIsTooLow,
    handleDecreaseNum: handleDecreaseAnimalsNum,
    handleIncreaseNum: handleIncreaseAnimalsNum,
  } = useGuestNum(3);

  const { guestNumberDropdown } = styles;
  return (
    <div className={guestNumberDropdown} ref={ref} style={style}>
      <GuestTypeInput
        typeName="Adults"
        typeCondition="13 years of age or higher"
        number={adultsNum}
        numIsUnder={adultsNumIsTooLow}
        numIsOver={adultsNumIsTooHigh}
        onIncrease={handleIncreaseAdultsNum}
        onDecrease={handleDecreaseAdultsNum}
      />
      <GuestTypeInput
        typeName="Children"
        typeCondition="From 2 - 12 of ages"
        number={childrenNum}
        numIsUnder={childrenNumIsTooLow}
        numIsOver={childrenNumIsTooHigh}
        onIncrease={handleIncreaseChildrenNum}
        onDecrease={handleDecreaseChildrenNum}
      />
      <GuestTypeInput
        typeName="Babies"
        typeCondition="Under 2 years of age"
        number={babiesNum}
        numIsUnder={babiesNumIsTooLow}
        numIsOver={babiesNumIsTooHigh}
        onIncrease={handleIncreaseBabiesNum}
        onDecrease={handleDecreaseBabiesNum}
      />
      <GuestTypeInput
        typeName="Animals"
        typeCondition="Only cats and dogs"
        number={animalsNum}
        numIsUnder={animalsNumIsTooLow}
        numIsOver={animalsNumIsTooHigh}
        onIncrease={handleIncreaseAnimalsNum}
        onDecrease={handleDecreaseAnimalsNum}
      />
    </div>
  );
});

export default GuestNumberDropdown;
