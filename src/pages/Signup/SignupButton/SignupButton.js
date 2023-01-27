import styles from "./SignupButton.module.scss";
import { Tooltip } from "antd";
import { useState } from "react";

const SignupButton = function ({ className, text, isDisabled, tooltipTitle }) {
  const [btnIsHovered, setBtnIsHovered] = useState(false);
  const handleHoverButton = function () {
    console.log("Enter");
    setBtnIsHovered(true);
  };
  const handleBlurButton = function () {
    console.log("Leave");
    setBtnIsHovered(false);
  };
  const { signupBtn, signupBtn__Disabled } = styles;
  return (
    <Tooltip
      title={tooltipTitle}
      placement="topRight"
      open={isDisabled && btnIsHovered}
    >
      <div>
        <button
          className={`${signupBtn} ${
            isDisabled ? signupBtn__Disabled : ""
          } ${className}`}
          onMouseOver={handleHoverButton}
          onMouseOut={handleBlurButton}
        >
          {text}
        </button>
      </div>
    </Tooltip>
  );
};

export default SignupButton;
