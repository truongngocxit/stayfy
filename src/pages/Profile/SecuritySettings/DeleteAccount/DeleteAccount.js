import styles from "./DeleteAccount.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import SettingButton from "../../SettingButton/SettingButton";
import Input from "../../../../components/Input/Input";
import useInput from "../../../../custom-hooks/useInput";
import useDeleteAccount from "../../../../custom-hooks/useDeleteAccount";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import AfterSubmitModal from "../../../../components/AfterSubmitModal/AfterSubmitModal";
import Overlay from "../../../../components/UI/Overlay/Overlay";

const DeleteAccount = function ({
  onOpenDeleteAccountForm,
  onCloseDeleteAccountForm,
  deleteAccountFormIsActive,
}) {
  const navigate = useNavigate();

  const {
    input: confirmation,
    handleInputChange: handleConfirmationChange,
    isTyping: isTypingConfirmation,
    handleStopTyping: handleStopTypingConfirmation,
    handleStartTyping: handleStartTypingConfirmation,
    resetInput: resetConfirmation,
    inputHasError: confirmationHasError,
    inputIsInvalid: confirmationIsInvalid,
  } = useInput((confirmation) => confirmation === "DELETE");

  const { isDeleting, deleteAccount } = useDeleteAccount();

  const handleCloseDeleteAccountForm = function () {
    resetConfirmation();
    onCloseDeleteAccountForm();
  };

  const handleConfirmDeleteAccount = function (event) {
    event.preventDefault();
    deleteAccount();
  };

  let state, header, stateMessage, navigateMessage, doAfterSubmit;

  if (isDeleting) {
    header = "Your account is being deleted";
    state = "loading";
    stateMessage = null;
    navigateMessage = null;
    doAfterSubmit = null;
  } else {
    header = "'Till we meet again :)";
    state = "success";
    stateMessage =
      "You have deleted your account successfully. You will be navigated to home page in 5 seconds";
    navigateMessage = "Or you could click here to go to home right away.";
    doAfterSubmit = () => navigate("/");
  }

  const {
    accountDelete,
    accountDelete__Container,
    accountDelete__Input,
    accountDelete__Btn,
  } = styles;
  return (
    <>
      <ProfileSettingItem
        heading="Delete account"
        placeholder="It's sad to see you go :( ... Anyway, please do this confirmation so we're sure you're not deleting your account by accident."
        savedInfo="Permanently delete your account"
        className={accountDelete__Container}
        isEditing={deleteAccountFormIsActive}
        onOpenSetting={onOpenDeleteAccountForm}
        onCloseSetting={handleCloseDeleteAccountForm}
      >
        <form className={accountDelete} onSubmit={handleConfirmDeleteAccount}>
          <Input
            label='Type "DELETE" to delete your account'
            className={accountDelete__Input}
            isTyping={isTypingConfirmation}
            value={confirmation}
            onChange={handleConfirmationChange}
            onBlur={handleStopTypingConfirmation}
            onFocus={handleStartTypingConfirmation}
            hasError={confirmationHasError}
            tooltipPlacement="topLeft"
            errorMessage="Are you sure you are typing 'DELETE'"
          />
          <SettingButton text="Delete account" className={accountDelete__Btn} />
        </form>
      </ProfileSettingItem>
      {isDeleting &&
        createPortal(
          <Overlay zIndex={1200} />,
          document.getElementById("overlay-root")
        )}

      {isDeleting &&
        createPortal(
          <AfterSubmitModal
            header={header}
            state={state}
            stateMessage={stateMessage}
            navigateMessage={navigateMessage}
            navigateSeconds={5}
            to="/profile"
            doAfterSubmit={doAfterSubmit}
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default DeleteAccount;
