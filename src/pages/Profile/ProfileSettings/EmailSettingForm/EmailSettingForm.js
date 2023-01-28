import styles from "./EmailSettingForm.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import SettingButton from "../../SettingButton/SettingButton";
import Input from "../../../../components/Input/Input";
import useInput from "../../../../custom-hooks/useInput";

const EmailSettingForm = function ({
  activeUserEmail,
  emailFormIsActive,
  onOpenEmailForm,
  onCloseEmailForm,
}) {
  const {
    input: mail,
    handleInputChange: handleMailChange,
    isTyping: isTypingMail,
    handleStopTyping: handleStopTypingMail,
    handleStartTyping: handleStartTypingMail,
    resetInput: resetMail,
    inputHasError: mailHasError,
    inputIsInvalid: mailIsInvalid,
  } = useInput((mail) => mail.includes("@") && mail.includes("."));

  const handleCloseEmailForm = function () {
    onCloseEmailForm();
    resetMail();
  };

  const { emailSetting, emailSetting__Btn } = styles;
  return (
    <ProfileSettingItem
      heading="Email"
      savedInfo={activeUserEmail}
      placeholder="Use an address you'll always have access to."
      isEditing={emailFormIsActive}
      onCloseSetting={handleCloseEmailForm}
      onOpenSetting={onOpenEmailForm}
    >
      <form className={emailSetting}>
        <Input
          label="email"
          isTyping={isTypingMail}
          onBlur={handleStopTypingMail}
          onFocus={handleStartTypingMail}
          value={mail}
          errorMessage="New email must NOT be empty"
          hasError={mailHasError}
          onChange={handleMailChange}
          tooltipPlacement="topLeft"
        />
        <SettingButton
          text="Save"
          className={emailSetting__Btn}
          isDisabled={mailIsInvalid}
        />
      </form>
    </ProfileSettingItem>
  );
};

export default EmailSettingForm;
