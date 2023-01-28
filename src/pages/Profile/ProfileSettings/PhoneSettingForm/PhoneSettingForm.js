import styles from "./PhoneSettingForm.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import SettingButton from "../../SettingButton/SettingButton";
import Input from "../../../../components/Input/Input";
import useInput from "../../../../custom-hooks/useInput";

const PhoneSettingForm = function ({ activeUserPhone }) {
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
  const { phoneSetting, phoneSetting__Btn } = styles;
  return (
    <ProfileSettingItem
      heading="Phone number"
      savedInfo={activeUserPhone}
      placeholder="For notifications, reminders, and help logging in"
    >
      <form className={phoneSetting}>
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
        <SettingButton text="Save" className={phoneSetting__Btn} />
      </form>
    </ProfileSettingItem>
  );
};

export default PhoneSettingForm;
