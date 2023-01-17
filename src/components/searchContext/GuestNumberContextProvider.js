import { createContext } from "react";
import useGuestNum from "../../custom-hooks/useGuestNum";

const GuestNumberContext = createContext();

const GuestNumberContextProvider = function ({ children }) {
  const adultsNumContextSlice = useGuestNum(7);

  const childrenNumContextSlice = useGuestNum(7);

  const babiesNumContextSlice = useGuestNum(7);

  const animalsNumContextSlice = useGuestNum(3);

  const resetContext = function () {
    adultsNumContextSlice.setGuestNum(0);
    childrenNumContextSlice.setGuestNum(0);
    babiesNumContextSlice.setGuestNum(0);
    animalsNumContextSlice.setGuestNum(0);
  };

  return (
    <GuestNumberContext.Provider
      value={{
        resetContext,
        adultsNumContextSlice,
        childrenNumContextSlice,
        babiesNumContextSlice,
        animalsNumContextSlice,
      }}
    >
      {children}
    </GuestNumberContext.Provider>
  );
};

export { GuestNumberContextProvider };
export default GuestNumberContext;

// const {
//     guestNum: adultsNum,
//     guestNumIsTooHigh: adultsNumIsTooHigh,
//     guestNumIsTooLow: adultsNumIsTooLow,
//     handleDecreaseNum: handleDecreaseAdultsNum,
//     handleIncreaseNum: handleIncreaseAdultsNum,
//   } = useGuestNum(7);

//   const {
//     guestNum: childrenNum,
//     guestNumIsTooHigh: childrenNumIsTooHigh,
//     guestNumIsTooLow: childrenNumIsTooLow,
//     handleDecreaseNum: handleDecreaseChildrenNum,
//     handleIncreaseNum: handleIncreaseChildrenNum,
//   } = useGuestNum(7);

//   const {
//     guestNum: babiesNum,
//     guestNumIsTooHigh: babiesNumIsTooHigh,
//     guestNumIsTooLow: babiesNumIsTooLow,
//     handleDecreaseNum: handleDecreaseBabiesNum,
//     handleIncreaseNum: handleIncreaseBabiesNum,
//   } = useGuestNum(7);

//   const {
//     guestNum: animalsNum,
//     guestNumIsTooHigh: animalsNumIsTooHigh,
//     guestNumIsTooLow: animalsNumIsTooLow,
//     handleDecreaseNum: handleDecreaseAnimalsNum,
//     handleIncreaseNum: handleIncreaseAnimalsNum,
//   } = useGuestNum(3);
