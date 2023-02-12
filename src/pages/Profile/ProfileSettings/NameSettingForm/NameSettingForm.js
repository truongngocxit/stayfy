import styles from "./NameSettingForm.module.scss";
import Button from "../../../../components/Button/Button";
import SettingButton from "../../SettingButton/SettingButton";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import useInput from "../../../../custom-hooks/useInput";
import Input from "../../../../components/Input/Input";
import useChangeUserInfo from "../../../../custom-hooks/useChangeUserInfo";
import { createPortal } from "react-dom";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";

const NameSettingForm = function ({
  activeUserLastName,
  activeUserFirstName,
  nameFormIsActive,
  onOpenNameForm,
  onCloseNameForm,
}) {
  const { isLoading, hasChanged, patchUserData } = useChangeUserInfo();
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

    patchUserData({ firstName, lastName }, handleCloseNameForm);
  };

  const formIsInvalid = firstNameIsInvalid || lastNameIsInvalid;

  const handleCloseNameForm = function () {
    onCloseNameForm();
    resetFirstName();
    resetLastName();
  };

  const { nameSetting, nameSetting_Input, nameSetting__Btn } = styles;
  return (
    <>
      <ProfileSettingItem
        heading="Legal name"
        savedInfo={`${activeUserFirstName} ${activeUserLastName}`}
        placeholder="The name on your passport or ID license"
        isEditing={nameFormIsActive}
        onOpenSetting={onOpenNameForm}
        onCloseSetting={handleCloseNameForm}
        formHasUpdated={hasChanged}
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

          <Button
            className={nameSetting__Btn}
            isDisabled={formIsInvalid}
            errorMessage={"Please fill in the form above"}
          >
            Save
          </Button>
        </form>
      </ProfileSettingItem>
      {isLoading &&
        createPortal(
          <LoadingScreen />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default NameSettingForm;
