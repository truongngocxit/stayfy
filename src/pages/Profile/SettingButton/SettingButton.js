import styles from "./SettingButton.module.scss";
import { Tooltip } from "antd";

const SettingButton = function ({ text, onClick, className, isDisabled }) {
  const { settingBtn, settingBtn__Disabled } = styles;
  return (
    <Tooltip title="this is the button">
      <button
        className={`${settingBtn} ${
          isDisabled ? settingBtn__Disabled : ""
        } ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </Tooltip>
  );
};

export default SettingButton;
