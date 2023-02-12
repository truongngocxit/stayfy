import styles from "./Button.module.scss";

import { Tooltip } from "antd";
import { useState } from "react";

const Button = function ({
  children,
  type = "submit",
  onClick,
  className,
  isDisabled,
  errorMessage,
  tooltipPlacement = "topRight",
}) {
  const [btnIsHovered, setBtnIsHovered] = useState(false);
  const handleMouseOverButton = function () {
    setBtnIsHovered(true);
  };
  const handleMouseOutButton = function () {
    setBtnIsHovered(false);
  };
  const { btn, btn__Disabled } = styles;
  return (
    <Tooltip
      title={errorMessage}
      open={isDisabled && btnIsHovered}
      placement={tooltipPlacement}
    >
      <div>
        <button
          className={`${btn} ${className} ${isDisabled ? btn__Disabled : ""} `}
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          onMouseOver={handleMouseOverButton}
          onMouseOut={handleMouseOutButton}
        >
          {children}
        </button>
      </div>
    </Tooltip>
  );
};

export default Button;
