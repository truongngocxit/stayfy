import styles from "./PhoneSettingForm.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import SettingButton from "../../SettingButton/SettingButton";
import Input from "../../../../components/Input/Input";
import { createPortal } from "react-dom";
import useInput from "../../../../custom-hooks/useInput";
import useChangeUserInfo from "../../../../custom-hooks/useChangeUserInfo";
import Button from "../../../../components/Button/Button";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";

const PhoneSettingForm = function ({
  activeUserPhone,
  phoneFormIsActive,
  onOpenPhoneForm,
  onClosePhoneForm,
}) {
  const {
    input: phone,
    handleInputChange: handlePhoneChange,
    isTyping: isTypingPhone,
    handleStopTyping: handleStopTypingPhone,
    handleStartTyping: handleStartTypingPhone,
    resetInput: resetPhone,
    inputHasError: phoneHasError,
    inputIsInvalid: phoneIsInvalid,
  } = useInput(
    (phone) => phone.trim() !== "" && !isNaN(-phone) && phone.length === 10
  );

  const { isLoading, error, hasChanged, patchUserData, cancelRequest } =
    useChangeUserInfo();

  const handleClosePhoneForm = function () {
    resetPhone();
    onClosePhoneForm();
  };

  const handleSubmitPhoneChange = async function (event) {
    event.preventDefault();
    patchUserData({ phone }, handleClosePhoneForm);
  };

  const { phoneSetting, phoneSetting__Btn } = styles;
  return (
    <>
      <ProfileSettingItem
        heading="Phone number"
        savedInfo={activeUserPhone}
        placeholder="For notifications, reminders, and help logging in"
        isEditing={phoneFormIsActive}
        onOpenSetting={onOpenPhoneForm}
        onCloseSetting={handleClosePhoneForm}
        formHasUpdated={hasChanged}
      >
        <form className={phoneSetting} onSubmit={handleSubmitPhoneChange}>
          <Input
            label="Phone number"
            isTyping={isTypingPhone}
            onBlur={handleStopTypingPhone}
            onFocus={handleStartTypingPhone}
            value={phone}
            errorMessage="New phone must NOT be empty"
            hasError={phoneHasError}
            onChange={handlePhoneChange}
            tooltipPlacement="topLeft"
          />

          <Button
            className={phoneSetting__Btn}
            isDisabled={phoneIsInvalid}
            errorMessage="New phone must NOT be empty"
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

export default PhoneSettingForm;
