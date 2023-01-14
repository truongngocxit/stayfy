import styles from "./SecuritySettings.module.scss";
import PasswordSetting from "./PasswordSetting/PasswordSetting";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

const SecuritySettings = function ({ className }) {
  const {
    securitySettings,
    securitySettings__Item,
    securitySettings__Heading,
    securitySettings_ItemsContainer,
  } = styles;
  return (
    <div className={`${securitySettings} ${className}`}>
      <h3 className={securitySettings__Heading}>Security Settings</h3>
      <div className={securitySettings_ItemsContainer}>
        <div className={securitySettings__Item}>
          <PasswordSetting />
        </div>
        <div className={securitySettings__Item}>
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
