import styles from "./SettingButton.module.scss";

const SettingButton = function ({ text, onClick, className }) {
  const { settingBtn } = styles;
  return (
    <button className={`${settingBtn} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default SettingButton;
