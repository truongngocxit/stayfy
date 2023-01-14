import styles from "./InfoInput.module.scss";

const InfoInput = function ({ label, type, className }) {
  const { infoInput } = styles;
  return (
    <label className={`${infoInput} ${className}`}>
      <span>{label}</span>
      <input type={type} />
    </label>
  );
};

export default InfoInput;
