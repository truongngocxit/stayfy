import styles from "./NameSettingForm.module.scss";
import ProfileSettingInput from "../SettingInput/ProfileSettingInput";
import SettingButton from "../SettingButton/SettingButton";

const NameSettingForm = function () {
  const { nameSetting, nameSetting_Input, nameSetting__Btn } = styles;
  return (
    <form className={nameSetting}>
      <ProfileSettingInput label="First name" className={nameSetting_Input} />
      <ProfileSettingInput label="Last name" className={nameSetting_Input} />
      <SettingButton className={nameSetting__Btn} text="Save" />
    </form>
  );
};

export default NameSettingForm;
