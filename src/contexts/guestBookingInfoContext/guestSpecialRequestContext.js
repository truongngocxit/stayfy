import { createContext } from "react";
import useInput from "../../custom-hooks/useInput";

const guestSpecialRequestContext = createContext();

const GuestSpecialRequestContextProvider = function ({ children }) {
  const specialRequestInput = useInput();
  return (
    <guestSpecialRequestContext.Provider value={specialRequestInput}>
      {children}
    </guestSpecialRequestContext.Provider>
  );
};

export { guestSpecialRequestContext };
export default GuestSpecialRequestContextProvider;
