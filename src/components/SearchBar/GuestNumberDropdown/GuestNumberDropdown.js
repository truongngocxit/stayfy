import styles from "./GuestNumberDropdown.module.scss";
import GuestTypeInput from "./GuestTypeInput/GuestTypeInput";
import { forwardRef } from "react";

const GuestNumberDropdown = forwardRef(function (
  {
    adultsData,
    babiesData,
    childrenData,
    animalsData,
    style,
    className,
    onOk,
    hasOkButton = true,
  },
  ref
) {
  const {
    guestNum: adultsNum,
    guestNumIsTooHigh: adultsNumIsTooHigh,
    guestNumIsTooLow: adultsNumIsTooLow,
    handleDecreaseNum: handleDecreaseAdultsNum,
    handleIncreaseNum: handleIncreaseAdultsNum,
  } = adultsData;

  const {
    guestNum: childrenNum,
    setGuestNum: setChilrenNum,
    guestNumIsTooHigh: childrenNumIsTooHigh,
    guestNumIsTooLow: childrenNumIsTooLow,
    handleDecreaseNum: handleDecreaseChildrenNum,
    handleIncreaseNum: handleIncreaseChildrenNum,
  } = childrenData;

  const {
    guestNum: babiesNum,
    setGuestNum: setBabiesNum,
    guestNumIsTooHigh: babiesNumIsTooHigh,
    guestNumIsTooLow: babiesNumIsTooLow,
    handleDecreaseNum: handleDecreaseBabiesNum,
    handleIncreaseNum: handleIncreaseBabiesNum,
  } = babiesData;

  const {
    guestNum: animalsNum,
    setGuestNum: setAnimalsNum,
    guestNumIsTooHigh: animalsNumIsTooHigh,
    guestNumIsTooLow: animalsNumIsTooLow,
    handleDecreaseNum: handleDecreaseAnimalsNum,
    handleIncreaseNum: handleIncreaseAnimalsNum,
  } = animalsData;

  const handleDecreaseAdultsAndResetOthers = function () {
    handleDecreaseAdultsNum();
    if (adultsNum === 1) {
      setAnimalsNum(0);
      setBabiesNum(0);
      setChilrenNum(0);
    }
  };

  const handleCloseDropdown = function (event) {
    event.stopPropagation();
    onOk();
  };

  return (
    <div
      className={`${guestNumberDropdown} ${className}`}
      ref={ref}
      style={style}
    >
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
      {hasOkButton && (
        <button
          className={guestNumberDropdown__OkBtn}
          onClick={handleCloseDropdown}
          type="button"
        >
          OK
        </button>
      )}
    </div>
  );
});

export default GuestNumberDropdown;

const {
  guestNumberDropdown,
  guestNumberDropdown__OkBtn,
  guestNumberDropdown__Input,
} = styles;
