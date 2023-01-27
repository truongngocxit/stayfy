import { createContext } from "react";
import useInput from "../../custom-hooks/useInput";

const arrivalTimeContext = createContext();

const ArrivalTimeContextProvider = function ({ children }) {
  const arrivalTimeInfo = useInput(null, "I'm not sure");
  return (
    <arrivalTimeContext.Provider value={arrivalTimeInfo}>
      {children}
    </arrivalTimeContext.Provider>
  );
};

export { arrivalTimeContext };
export default ArrivalTimeContextProvider;
