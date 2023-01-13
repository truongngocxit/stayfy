import styles from "./DeleteAccount.module.scss";
import ProfileSettingItem from "../ProfileSettingItem/ProfileSettingItem";
import ProfileSettingInput from "../SettingInput/ProfileSettingInput";
import SettingButton from "../SettingButton/SettingButton";
const DeleteAccount = function () {
  const { deleteAccount } = styles;
  return (
    <ProfileSettingItem
      heading="Delete account"
      placeholder="Why do you want to delete your account"
      savedInfo="Permanently delete your account"
    >
      <form className={deleteAccount}>
        <ProfileSettingInput label='Type "DELETE" to delete your account' />
        <SettingButton text="Delete account" />
      </form>
    </ProfileSettingItem>
  );
};

export default DeleteAccount;
