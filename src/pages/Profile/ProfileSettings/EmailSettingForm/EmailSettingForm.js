import styles from "./EmailSettingForm.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import ProfileSettingInput from "../../SettingInput/ProfileSettingInput";
import SettingButton from "../../SettingButton/SettingButton";

const EmailSettingForm = function () {
  const { emailSetting, emailSetting__Btn } = styles;
  return (
    <ProfileSettingItem
      heading="Email"
      savedInfo="n***7@gmail.com"
      placeholder="Use an address you’ll always have access to."
    >
      <form className={emailSetting}>
        <ProfileSettingInput label="email" />
        <SettingButton text="Save" className={emailSetting__Btn} />
      </form>
    </ProfileSettingItem>
  );
};

export default EmailSettingForm;
