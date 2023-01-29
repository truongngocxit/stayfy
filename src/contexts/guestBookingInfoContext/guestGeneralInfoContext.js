import { createContext } from "react";
import useInput from "../../custom-hooks/useInput";
import { useSelector } from "react-redux";

const guestGeneralInfoContext = createContext();

const GuestGeneralInfoContextProvicer = function ({ children }) {
  const {
    firstName: activeUserFirstName,
    lastName: activeUserLastName,
    email: activeUserEmail,
    phone: activeUserPhone,
  } = useSelector((state) => state.activeUser);
  const firstNameInput = useInput(
    (firstName) => firstName.trim() !== "",
    activeUserFirstName || ""
  );
  const lastNameInput = useInput(
    (lastName) => lastName.trim() !== "",
    activeUserLastName || ""
  );
  const emailInput = useInput(
    (email) =>
      email.trim() !== "" && email.includes("@") && email.includes("."),
    activeUserEmail || ""
  );
  const phoneInput = useInput(
    (phone) => phone.trim() !== "" && !isNaN(-phone) && phone.length === 10,
    activeUserPhone || ""
  );

  const bookedForInput = useInput(null, "I am the main guest");
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
