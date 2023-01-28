import styles from "./SettingButton.module.scss";
import { Tooltip } from "antd";
import { useState } from "react";

const SettingButton = function ({
  text,
  onClick,
  className,
  isDisabled,
  errorMessage,
}) {
  const [btnIsHovered, setBtnIsHovered] = useState(false);
  const handleMouseOverButton = function () {
    setBtnIsHovered(true);
  };
  const handleMouseOutButton = function () {
    setBtnIsHovered(false);
  };
  const { settingBtn, settingBtn__Disabled } = styles;
  return (
    <Tooltip title={errorMessage} open={isDisabled && btnIsHovered}>
      <button
        className={`${settingBtn} ${
          isDisabled ? settingBtn__Disabled : ""
        } ${className}`}
        onClick={onClick}
        onMouseOver={handleMouseOverButton}
        onMouseOut={handleMouseOutButton}
      >
        {text}
      </button>
    </Tooltip>
  );
};

export default SettingButton;
