import styles from "./Input.module.scss";
import { Tooltip } from "antd";

const Input = function ({
  isDisabled,
  label,
  type,
  className,
  isTyping,
  onBlur,
  onFocus,
  value,
  onChange,
  hasError,
  errorMessage = "Invalid input",
  tooltipPlacement = "topRight",
}) {
  const { input, input__Focus, input__Error, input__Disabled } = styles;
  return (
    <Tooltip
      title={errorMessage}
      placement={tooltipPlacement}
      color="#f03e3e"
      open={hasError && !isTyping && !isDisabled}
    >
      <label
        className={`${input} ${isTyping && !isDisabled ? input__Focus : ""} ${
          hasError && !isDisabled ? input__Error : ""
        } ${isDisabled ? input__Disabled : ""} ${className}`}
      >
        <span>{label}</span>
        <input
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          onChange={onChange}
          spellCheck={false}
          disabled={isDisabled}
        />
      </label>
    </Tooltip>
  );
};

export default Input;
