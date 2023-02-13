import styles from "./EmailSettingForm.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import SettingButton from "../../SettingButton/SettingButton";
import Input from "../../../../components/Input/Input";
import useInput from "../../../../custom-hooks/useInput";
import Button from "../../../../components/Button/Button";
import { createPortal } from "react-dom";
import LoadingScreen from "../../../../components/UI/LoadingScreen/LoadingScreen";
import useChangeUserInfo from "../../../../custom-hooks/useChangeUserInfo";

const EmailSettingForm = function ({
  activeUserEmail,
  emailFormIsActive,
  onOpenEmailForm,
  onCloseEmailForm,
}) {
  const { isLoading, patchUserData, hasChanged } = useChangeUserInfo();

  const {
    input: email,
    handleInputChange: handleEmailChange,
    isTyping: isTypingEmail,
    handleStopTyping: handleStopTypingEmail,
    handleStartTyping: handleStartTypingEmail,
    resetInput: resetEmail,
    inputHasError: emailHasError,
    inputIsInvalid: emailIsInvalid,
  } = useInput((email) => email.includes("@") && email.includes("."));

  const handleCloseEmailForm = function () {
    resetEmail();
    onCloseEmailForm();
  };

  const handleSubmitEmailChange = async function (event) {
    event.preventDefault();
    patchUserData({ email }, handleCloseEmailForm);
  };

  const { emailSetting, emailSetting__Btn } = styles;
  return (
    <>
      <ProfileSettingItem
        heading="Email"
        savedInfo={activeUserEmail}
        placeholder="Use an address you'll always have access to."
        isEditing={emailFormIsActive}
        onCloseSetting={handleCloseEmailForm}
        onOpenSetting={onOpenEmailForm}
        formHasUpdated={hasChanged}
      >
        <form className={emailSetting} onSubmit={handleSubmitEmailChange}>
          <Input
            label="Your email"
            isTyping={isTypingEmail}
            onBlur={handleStopTypingEmail}
            onFocus={handleStartTypingEmail}
            value={email}
            errorMessage="New email must NOT be empty"
            hasError={emailHasError}
            onChange={handleEmailChange}
            tooltipPlacement="topLeft"
          />
          <Button
            className={emailSetting__Btn}
            isDisabled={emailIsInvalid}
            errorMessage={"Please fill in a valid email"}
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

export default EmailSettingForm;
