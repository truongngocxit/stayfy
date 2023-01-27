import styles from "./InfoInput.module.scss";

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
}) {
  const { infoInput, infoInput__Focus, infoInput__Error } = styles;
  return (
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
  );
};

export default InfoInput;
