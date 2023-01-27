import { createContext } from "react";
import useGuestNum from "../../custom-hooks/useGuestNum";

const GuestNumberContext = createContext();

const GuestNumberContextProvider = function ({ children }) {
  const adultsNumContextSlice = useGuestNum(7, 1);

  const childrenNumContextSlice = useGuestNum(7);

  const babiesNumContextSlice = useGuestNum(5);

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
