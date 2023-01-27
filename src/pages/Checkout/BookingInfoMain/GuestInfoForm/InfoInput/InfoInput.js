import styles from "./InfoInput.module.scss";
import { Tooltip } from "antd";

const InfoInput = function ({
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
  const { infoInput, infoInput__Focus, infoInput__Error } = styles;
  return (
    <Tooltip
      title={errorMessage}
      placement="topRight"
      color="#f92432"
      open={hasError && !isTyping}
    >
      <label
        className={`${infoInput} ${isTyping ? infoInput__Focus : ""} ${
          hasError ? infoInput__Error : ""
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

export default InfoInput;
