import styles from "./GuestNumberDropdown.module.scss";
import GuestTypeInput from "./GuestTypeInput/GuestTypeInput";
import { forwardRef, useContext } from "react";
import GuestNumberContext from "../../searchContext/GuestNumberContextProvider";

const GuestNumberDropdown = forwardRef(function ({ style }, ref) {
  const {
    adultsNumContextSlice,
    childrenNumContextSlice,
    babiesNumContextSlice,
    animalsNumContextSlice,
  } = useContext(GuestNumberContext);

  const {
    guestNum: adultsNum,
    guestNumIsTooHigh: adultsNumIsTooHigh,
    guestNumIsTooLow: adultsNumIsTooLow,
    handleDecreaseNum: handleDecreaseAdultsNum,
    handleIncreaseNum: handleIncreaseAdultsNum,
  } = adultsNumContextSlice;

  const {
    guestNum: childrenNum,
    setGuestNum: setChilrenNum,
    guestNumIsTooHigh: childrenNumIsTooHigh,
    guestNumIsTooLow: childrenNumIsTooLow,
    handleDecreaseNum: handleDecreaseChildrenNum,
    handleIncreaseNum: handleIncreaseChildrenNum,
  } = childrenNumContextSlice;

  const {
    guestNum: babiesNum,
    setGuestNum: setBabiesNum,
    guestNumIsTooHigh: babiesNumIsTooHigh,
    guestNumIsTooLow: babiesNumIsTooLow,
    handleDecreaseNum: handleDecreaseBabiesNum,
    handleIncreaseNum: handleIncreaseBabiesNum,
  } = babiesNumContextSlice;

  const {
    guestNum: animalsNum,
    setGuestNum: setAnimalsNum,
    guestNumIsTooHigh: animalsNumIsTooHigh,
    guestNumIsTooLow: animalsNumIsTooLow,
    handleDecreaseNum: handleDecreaseAnimalsNum,
    handleIncreaseNum: handleIncreaseAnimalsNum,
  } = animalsNumContextSlice;

  const handleDecreaseAdultsAndResetOthers = function () {
    handleDecreaseAdultsNum();
    if (adultsNum === 1) {
      setAnimalsNum(0);
      setBabiesNum(0);
      setChilrenNum(0);
    }
  };

  const { guestNumberDropdown } = styles;
  return (
    <div className={guestNumberDropdown} ref={ref} style={style}>
      <GuestTypeInput
        typeName="Adults"
        typeCondition="13 years of age or higher"
        number={adultsNum}
        decreaseDisable={adultsNumIsTooLow}
        increaseDisable={adultsNumIsTooHigh}
        onIncrease={handleIncreaseAdultsNum}
        onDecrease={handleDecreaseAdultsAndResetOthers}
      />
      <GuestTypeInput
        typeName="Children"
        typeCondition="From 2 - 12 of ages"
        number={childrenNum}
        decreaseDisable={childrenNumIsTooLow}
        increaseDisable={childrenNumIsTooHigh || adultsNum === 0}
        onIncrease={handleIncreaseChildrenNum}
        onDecrease={handleDecreaseChildrenNum}
      />
      <GuestTypeInput
        typeName="Babies"
        typeCondition="Under 2 years of age"
        number={babiesNum}
        decreaseDisable={babiesNumIsTooLow}
        increaseDisable={babiesNumIsTooHigh || adultsNum === 0}
        onIncrease={handleIncreaseBabiesNum}
        onDecrease={handleDecreaseBabiesNum}
      />
      <GuestTypeInput
        typeName="Animals"
        typeCondition="Only cats and dogs"
        number={animalsNum}
        decreaseDisable={animalsNumIsTooLow}
        increaseDisable={animalsNumIsTooHigh || adultsNum === 0}
        onIncrease={handleIncreaseAnimalsNum}
        onDecrease={handleDecreaseAnimalsNum}
      />
    </div>
  );
});

export default GuestNumberDropdown;
