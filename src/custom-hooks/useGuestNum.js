import { useState } from "react";

const useGuestNum = function (maxNum, initialState = 0) {
  const [guestNum, setGuestNum] = useState(initialState);
  const guestNumIsTooLow = guestNum === 0;
  const guestNumIsTooHigh = guestNum >= maxNum;

  const handleIncreaseNum = function () {
    if (guestNum === maxNum) return;
    setGuestNum((n) => n + 1);
  };

  const handleDecreaseNum = function () {
    if (guestNum === 0) return;
    setGuestNum((n) => n - 1);
  };

  return {
    guestNum,
    setGuestNum,
    guestNumIsTooHigh,
    guestNumIsTooLow,
    handleIncreaseNum,
    handleDecreaseNum,
  };
};

export default useGuestNum;
