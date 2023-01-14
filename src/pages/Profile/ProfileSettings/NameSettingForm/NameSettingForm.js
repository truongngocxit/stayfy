import styles from "./NameSettingForm.module.scss";
import ProfileSettingInput from "../../SettingInput/ProfileSettingInput";
import SettingButton from "../../SettingButton/SettingButton";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
const NameSettingForm = function () {
  const { nameSetting, nameSetting_Input, nameSetting__Btn } = styles;
  return (
    <ProfileSettingItem
      heading="Legal name"
      savedInfo="Truong Nguyen"
      placeholder="The name on your passport or ID license"
    >
      <form className={nameSetting}>
        <ProfileSettingInput label="First name" className={nameSetting_Input} />
        <ProfileSettingInput label="Last name" className={nameSetting_Input} />
        <SettingButton className={nameSetting__Btn} text="Save" />
      </form>
    </ProfileSettingItem>
  );
};

export default NameSettingForm;
