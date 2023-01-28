import styles from "./PasswordSetting.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import Input from "../../../../components/Input/Input";
import SettingButton from "../../SettingButton/SettingButton";

const PasswordSetting = function () {
  const { passwordSetting, passwordSetting__Input } = styles;
  return (
    <ProfileSettingItem
      heading="Change password"
      savedInfo="Last changed 22 days ago"
      placeholder="Last changed 22 days ago"
    >
      <form className={passwordSetting}>
        <Input
          type="password"
          label="Old password"
          className={passwordSetting__Input}
        />
        <Input
          type="password"
          label="New password"
          className={passwordSetting__Input}
        />
        <Input
          type="password"
          label="Confirm new password"
          className={passwordSetting__Input}
        />
        <SettingButton text="Change password" />
      </form>
    </ProfileSettingItem>
  );
};

export default PasswordSetting;
