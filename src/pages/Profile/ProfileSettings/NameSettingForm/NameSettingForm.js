import styles from "./NameSettingForm.module.scss";

import SettingButton from "../../SettingButton/SettingButton";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import useInput from "../../../../custom-hooks/useInput";
import Input from "../../../../components/Input/Input";
import { useDispatch } from "react-redux";
import { activeUserActions } from "../../../../redux-store/activeUserSlice";

const NameSettingForm = function ({
  activeUserLastName,
  activeUserFirstName,
  nameFormIsActive,
  onOpenNameForm,
  onCloseNameForm,
}) {
  const reduxDispatch = useDispatch();
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

  const handleSaveName = async function (event) {
    event.preventDefault();

    await fetch(
      "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/-NMqVq60c6GFIieYRMDJ.json",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
        }),
      }
    );

    const response = await fetch(
      "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/-NMqVq60c6GFIieYRMDJ.json"
    );
    const data = await response.json();

    reduxDispatch(activeUserActions.changeUserFirstName(data.firstName));
    reduxDispatch(activeUserActions.changeUserLastName(data.lastName));
  };

  const formIsInvalid = firstNameIsInvalid || lastNameIsInvalid;

  const handleCloseNameForm = function () {
    onCloseNameForm();
    resetFirstName();
    resetLastName();
  };

  const { nameSetting, nameSetting_Input, nameSetting__Btn } = styles;
  return (
    <ProfileSettingItem
      heading="Legal name"
      savedInfo={`${activeUserFirstName} ${activeUserLastName}`}
      placeholder="The name on your passport or ID license"
      isEditing={nameFormIsActive}
      onOpenSetting={onOpenNameForm}
      onCloseSetting={handleCloseNameForm}
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
          errorMessage={"Please fill in the form above"}
        />
      </form>
    </ProfileSettingItem>
  );
};

export default NameSettingForm;
