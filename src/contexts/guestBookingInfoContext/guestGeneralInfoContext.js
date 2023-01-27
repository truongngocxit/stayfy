import { createContext } from "react";
import useInput from "../../custom-hooks/useInput";

const guestGeneralInfoContext = createContext();

const GuestGeneralInfoContextProvicer = function ({ children }) {
  const firstNameInput = useInput((firstName) => firstName.trim() !== "");
  const lastNameInput = useInput((lastName) => lastName.trim() !== "");
  const emailInput = useInput(
    (email) => email.trim() !== "" && email.includes("@") && email.includes(".")
  );
  const phoneInput = useInput(
    (phone) => phone.trim() !== "" && !isNaN(-phone) && phone.length === 10
  );
  const bookedForInput = useInput();
  return (
    <guestGeneralInfoContext.Provider
      value={{
        firstNameInput,
        lastNameInput,
        emailInput,
        phoneInput,
        bookedForInput,
      }}
    >
      {children}
    </guestGeneralInfoContext.Provider>
  );
};

export { guestGeneralInfoContext };
export default GuestGeneralInfoContextProvicer;
