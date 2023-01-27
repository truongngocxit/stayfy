import styles from "./Input.module.scss";
import { Tooltip } from "antd";

const Input = function ({
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
}) {
  const { input, input__Focus, input__Error } = styles;
  return (
    <Tooltip
      title={errorMessage}
      placement="topRight"
      color="#f92432"
      open={hasError && !isTyping}
    >
      <label
        className={`${input} ${isTyping ? input__Focus : ""} ${
          hasError ? input__Error : ""
        } ${className}`}
      >
        <span>{label}</span>
        <input
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          onChange={onChange}
          spellCheck={false}
        />
      </label>
    </Tooltip>
  );
};

export default Input;
