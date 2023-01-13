import styles from "./ProfileSettingInput.module.scss";

const ProfileSettingInput = function ({ label, className, type }) {
  const { settingInput } = styles;
  return (
    <label className={`${settingInput} ${className}`}>
      <span>{label}</span>
      <input type={type ? type : null} />
    </label>
  );
};

export default ProfileSettingInput;
