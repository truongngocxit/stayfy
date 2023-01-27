import styles from "./GuestInfoForm.module.scss";
import InfoInput from "./InfoInput/InfoInput";
import InfoRadio from "./InfoRadio/InfoRadio";
import useInput from "../../../../custom-hooks/useInput";

const GuestInfoForm = function () {
  const {
    input: firstName,
    handleInputChange: handleFirstNameChange,
    isTyping: isTypingFirstName,
    handleStopTyping: handleStopTypingFirstName,
    handleStartTyping: handleStartTypingFirstName,
    inputHasError: firstNameHasError,
  } = useInput((firstName) => firstName.trim() !== "");

  const {
    input: lastName,
    handleInputChange: handleLastNameChange,
    isTyping: isTypingLastName,
    handleStopTyping: handleStopTypingLastName,
    handleStartTyping: handleStartTypingLastName,
    inputHasError: lastNameHasError,
  } = useInput((lastName) => lastName.trim() !== "");

  const {
    input: email,
    handleInputChange: handleEmailChange,
    isTyping: isTypingEmail,
    handleStopTyping: handleStopTypingEmail,
    handleStartTyping: handleStartTypingEmail,
    inputHasError: emailHasError,
  } = useInput(
    (email) => email.trim() !== "" && email.includes("@") && email.includes(".")
  );

  const {
    input: phone,
    handleInputChange: handlePhoneChange,
    isTyping: isTypingPhone,
    handleStopTyping: handleStopTypingPhone,
    handleStartTyping: handleStartTypingPhone,
    inputHasError: phoneHasError,
  } = useInput(
    (phone) => phone.trim() !== "" && !isNaN(-phone) && phone.length === 10
  );

  const {
    infoForm,
    infoForm__Container,
    infoForm__FName,
    infoForm__LName,
    infoForm__Email,
    infoForm__Phone,
  } = styles;
  return (
    <div className={infoForm__Container}>
      <form className={infoForm}>
        <h3>Your information</h3>
        <InfoInput
          hasError={firstNameHasError}
          label="First name"
          value={firstName}
          onChange={handleFirstNameChange}
          className={infoForm__FName}
          isTyping={isTypingFirstName}
          onFocus={handleStartTypingFirstName}
          onBlur={handleStopTypingFirstName}
        />
        <InfoInput
          hasError={lastNameHasError}
          label="Last name"
          value={lastName}
          onChange={handleLastNameChange}
          className={infoForm__LName}
          isTyping={isTypingLastName}
          onFocus={handleStartTypingLastName}
          onBlur={handleStopTypingLastName}
        />
        <InfoInput
          hasError={emailHasError}
          label="Email address"
          value={email}
          onChange={handleEmailChange}
          className={infoForm__Email}
          isTyping={isTypingEmail}
          onFocus={handleStartTypingEmail}
          onBlur={handleStopTypingEmail}
        />
        <InfoInput
          hasError={phoneHasError}
          label="Phone number"
          value={phone}
          onChange={handlePhoneChange}
          className={infoForm__Phone}
          isTyping={isTypingPhone}
          onFocus={handleStartTypingPhone}
          onBlur={handleStopTypingPhone}
        />
      </form>
      <InfoRadio
        legend="Who are you booking for?"
        name="travel"
        values={["I am the main guest", "Booking is for someone else"]}
      />
    </div>
  );
};

export default GuestInfoForm;
