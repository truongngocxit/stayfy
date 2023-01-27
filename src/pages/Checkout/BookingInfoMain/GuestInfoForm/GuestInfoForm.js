import styles from "./GuestInfoForm.module.scss";
import InfoRadio from "./InfoRadio/InfoRadio";
import Input from "../../../../components/Input/Input";
import { Tooltip } from "antd";
import { useContext } from "react";
import { guestGeneralInfoContext } from "../../../../contexts/guestBookingInfoContext/guestGeneralInfoContext";

const GuestInfoForm = function () {
  const {
    firstNameInput,
    lastNameInput,
    emailInput,
    phoneInput,
    bookedForInput,
  } = useContext(guestGeneralInfoContext);

  const {
    input: firstName,
    handleInputChange: handleFirstNameChange,
    isTyping: isTypingFirstName,
    handleStopTyping: handleStopTypingFirstName,
    handleStartTyping: handleStartTypingFirstName,
    inputHasError: firstNameHasError,
  } = firstNameInput;

  const {
    input: lastName,
    handleInputChange: handleLastNameChange,
    isTyping: isTypingLastName,
    handleStopTyping: handleStopTypingLastName,
    handleStartTyping: handleStartTypingLastName,
    inputHasError: lastNameHasError,
  } = lastNameInput;

  const {
    input: email,
    handleInputChange: handleEmailChange,
    isTyping: isTypingEmail,
    handleStopTyping: handleStopTypingEmail,
    handleStartTyping: handleStartTypingEmail,
    inputHasError: emailHasError,
  } = emailInput;

  const {
    input: phone,
    handleInputChange: handlePhoneChange,
    isTyping: isTypingPhone,
    handleStopTyping: handleStopTypingPhone,
    handleStartTyping: handleStartTypingPhone,
    inputHasError: phoneHasError,
  } = phoneInput;

  const { input: bookedFor, handleInputChange: handleChangeBookedFor } =
    bookedForInput;

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

        <Input
          className={infoForm__FName}
          errorMessage="Invalid first name"
          hasError={firstNameHasError}
          label="First name"
          value={firstName}
          onChange={handleFirstNameChange}
          isTyping={isTypingFirstName}
          onFocus={handleStartTypingFirstName}
          onBlur={handleStopTypingFirstName}
        />

        <Input
          className={infoForm__LName}
          errorMessage="Invalid last name"
          hasError={lastNameHasError}
          label="Last name"
          value={lastName}
          onChange={handleLastNameChange}
          isTyping={isTypingLastName}
          onFocus={handleStartTypingLastName}
          onBlur={handleStopTypingLastName}
        />
        <Input
          className={infoForm__Email}
          errorMessage="Invalid email (includes domain name)"
          hasError={emailHasError}
          label="Email address"
          value={email}
          onChange={handleEmailChange}
          isTyping={isTypingEmail}
          onFocus={handleStartTypingEmail}
          onBlur={handleStopTypingEmail}
        />
        <Input
          className={infoForm__Phone}
          errorMessage="Invalid phone (= 10 numbers)"
          hasError={phoneHasError}
          label="Phone number"
          value={phone}
          onChange={handlePhoneChange}
          isTyping={isTypingPhone}
          onFocus={handleStartTypingPhone}
          onBlur={handleStopTypingPhone}
        />
      </form>
      <InfoRadio
        onChange={handleChangeBookedFor}
        value={bookedFor}
        legend="Who are you booking for?"
        name="travel"
        values={["I am the main guest", "Booking is for someone else"]}
      />
    </div>
  );
};

export default GuestInfoForm;
