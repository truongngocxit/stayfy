import styles from "./ProfileSettingInput.module.scss";

const ProfileSettingInput = function ({ label, className }) {
  const { settingInput } = styles;
  return (
    <label className={`${settingInput} ${className}`}>
      <span>{label}</span>
      <input />
    </label>
  );
};

export default ProfileSettingInput;
