import styles from "./NameSettingForm.module.scss";

import SettingButton from "../../SettingButton/SettingButton";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import useInput from "../../../../custom-hooks/useInput";
import Input from "../../../../components/Input/Input";

const NameSettingForm = function ({ activeUserLastName, activeUserFirstName }) {
  const {
    input: firstName,
    handleInputChange: handleFirstNameChange,
    isTyping: isTypingFirstName,
    handleStopTyping: handleStopTypingFirstName,
    handleStartTyping: handleStartTypingFirstName,
    resetInput: resetFirstName,
    inputHasError: firstNameHasError,
    inputIsInvalid: firstNameIsInvalid,
  } = useInput((firstName) => firstName.trim() !== "");

  const {
    input: lastName,
    handleInputChange: handleLastNameChange,
    isTyping: isTypingLastName,
    handleStopTyping: handleStopTypingLastName,
    handleStartTyping: handleStartTypingLastName,
    resetInput: resetLastName,
    inputHasError: lastNameHasError,
    inputIsInvalid: lastNameIsInvalid,
  } = useInput((lastName) => lastName.trim() !== "");

  const handleSaveName = function (event) {
    event.preventDefault();
  };

  const formIsInvalid = firstNameIsInvalid || lastNameIsInvalid;

  const { nameSetting, nameSetting_Input, nameSetting__Btn } = styles;
  return (
    <ProfileSettingItem
      heading="Legal name"
      savedInfo={`${activeUserFirstName} ${activeUserLastName}`}
      placeholder="The name on your passport or ID license"
    >
      <form className={nameSetting} onSubmit={handleSaveName}>
        <Input
          label="First name"
          className={nameSetting_Input}
          isTyping={isTypingFirstName}
          onBlur={handleStopTypingFirstName}
          onFocus={handleStartTypingFirstName}
          value={firstName}
          errorMessage="New first name must NOT be empty"
          hasError={firstNameHasError}
          onChange={handleFirstNameChange}
          tooltipPlacement="topLeft"
        />
        <Input
          label="First name"
          className={nameSetting_Input}
          isTyping={isTypingLastName}
          onBlur={handleStopTypingLastName}
          onFocus={handleStartTypingLastName}
          value={lastName}
          errorMessage="New last name must NOT be empty"
          hasError={lastNameHasError}
          onChange={handleLastNameChange}
          tooltipPlacement="topLeft"
        />
        <SettingButton
          className={nameSetting__Btn}
          text="Save"
          isDisabled={formIsInvalid}
        />
      </form>
    </ProfileSettingItem>
  );
};

export default NameSettingForm;
