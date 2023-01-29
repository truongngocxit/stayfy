import styles from "./PasswordSetting.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import Input from "../../../../components/Input/Input";
import SettingButton from "../../SettingButton/SettingButton";
import useInput from "../../../../custom-hooks/useInput";
import maskPassword from "../../../../utils/maskPassword";
import useChangeUserInfo from "../../../../custom-hooks/useChangeUserInfo";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const PasswordSetting = function ({
  onOpenPasswordForm,
  onClosePasswordForm,
  passwordFormIsActive,
}) {
  const activeUserCurrentPassword = useSelector(
    (state) => state.activeUser.password
  );

  const { isLoading, patchUserData, hasChanged } = useChangeUserInfo();

  const {
    input: oldPassword,
    handleInputChange: handleOldPasswordChange,
    isTyping: isTypingOldPassword,
    handleStopTyping: handleStopTypingOldPassword,
    handleStartTyping: handleStartTypingOldPassword,
    resetInput: resetOldPassword,
    inputHasError: oldPasswordHasError,
    inputIsInvalid: oldPasswordIsInvalid,
  } = useInput((oldPassword) => oldPassword === activeUserCurrentPassword);

  const {
    input: newPassword,
    handleInputChange: handleNewPasswordChange,
    isTyping: isTypingNewPassword,
    handleStopTyping: handleStopTypingNewPassword,
    handleStartTyping: handleStartTypingNewPassword,
    resetInput: resetNewPassword,
    inputHasError: newPasswordHasError,
    inputIsInvalid: newPasswordIsInvalid,
  } = useInput(
    (newPassword) =>
      newPassword !== oldPassword &&
      !newPassword.includes(" ") &&
      newPassword.length >= 10 &&
      newPassword.match(/\W|_/g)
  );

  const {
    input: newPasswordConfirm,
    handleInputChange: handleNewPasswordConfirmChange,
    isTyping: isTypingNewPasswordConfirm,
    handleStopTyping: handleStopTypingNewPasswordConfirm,
    handleStartTyping: handleStartTypingNewPasswordConfirm,
    resetInput: resetNewPasswordConfirm,
    inputHasError: newPasswordConfirmHasError,
    inputIsInvalid: newPasswordConfirmIsInvalid,
  } = useInput((newPasswordConfirm) => newPasswordConfirm === newPassword);

  const handleClosePasswordChange = function () {
    onClosePasswordForm();
    resetOldPassword();
    resetNewPassword();
    resetNewPasswordConfirm();
  };

  const handleSubmitNewPassword = function (event) {
    event.preventDefault();
    patchUserData({ password: newPassword }, handleClosePasswordChange);
  };

  const { passwordSetting, passwordSetting__Input } = styles;
  return (
    <>
      <ProfileSettingItem
        heading="Change password"
        savedInfo={maskPassword(activeUserCurrentPassword)}
        placeholder="New password should have > 10 characters, 1 special character, and is DIFFRENT from your last password"
        isEditing={passwordFormIsActive}
        onOpenSetting={onOpenPasswordForm}
        onCloseSetting={handleClosePasswordChange}
        formHasUpdated={hasChanged}
      >
        <form className={passwordSetting} onSubmit={handleSubmitNewPassword}>
          <Input
            type="password"
            label="Old password"
            className={passwordSetting__Input}
            isTyping={isTypingOldPassword}
            onBlur={handleStopTypingOldPassword}
            onFocus={handleStartTypingOldPassword}
            onChange={handleOldPasswordChange}
            value={oldPassword}
            hasError={oldPasswordHasError}
            errorMessage="Must match your old password"
          />
          <Input
            type="password"
            label="New password"
            className={passwordSetting__Input}
            isTyping={isTypingNewPassword}
            onBlur={handleStopTypingNewPassword}
            onFocus={handleStartTypingNewPassword}
            onChange={handleNewPasswordChange}
            value={newPassword}
            hasError={newPasswordHasError}
            errorMessage="Must have > 10 characters, NOT be the same as your past password, and contain 1 special character"
          />
          <Input
            type="password"
            label="Confirm new password"
            className={passwordSetting__Input}
            isTyping={isTypingNewPasswordConfirm}
            onBlur={handleStopTypingNewPasswordConfirm}
            onFocus={handleStartTypingNewPasswordConfirm}
            onChange={handleNewPasswordConfirmChange}
            value={newPasswordConfirm}
            hasError={newPasswordConfirmHasError}
            errorMessage="Must be the same as your new password"
          />
          <SettingButton text="Change password" />
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

export default PasswordSetting;
