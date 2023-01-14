import styles from "./PhoneSettingForm.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import ProfileSettingInput from "../../SettingInput/ProfileSettingInput";
import SettingButton from "../../SettingButton/SettingButton";

const PhoneSettingForm = function () {
  const { phoneSetting, phoneSetting__Btn } = styles;
  return (
    <ProfileSettingItem
      heading="Phone number"
      savedInfo="0912720513"
      placeholder="For notifications, reminders, and help logging in"
    >
      <form className={phoneSetting}>
        <ProfileSettingInput label="Phone number" />
        <SettingButton text="Save" className={phoneSetting__Btn} />
      </form>
    </ProfileSettingItem>
  );
};

export default PhoneSettingForm;
