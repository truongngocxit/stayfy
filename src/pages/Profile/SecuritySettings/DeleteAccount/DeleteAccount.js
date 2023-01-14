import styles from "./DeleteAccount.module.scss";
import ProfileSettingItem from "../../ProfileSettingItem/ProfileSettingItem";
import ProfileSettingInput from "../../SettingInput/ProfileSettingInput";
import SettingButton from "../../SettingButton/SettingButton";
const DeleteAccount = function () {
  const {
    deleteAccount,
    deleteAccount__Container,
    deleteAccount__Input,
    deleteAccount__Btn,
  } = styles;
  return (
    <ProfileSettingItem
      heading="Delete account"
      placeholder="Why do you want to delete your account"
      savedInfo="Permanently delete your account"
      className={deleteAccount__Container}
    >
      <form className={deleteAccount}>
        <ProfileSettingInput
          label='Type "DELETE" to delete your account'
          className={deleteAccount__Input}
        />
        <SettingButton text="Delete account" className={deleteAccount__Btn} />
      </form>
    </ProfileSettingItem>
  );
};

export default DeleteAccount;
