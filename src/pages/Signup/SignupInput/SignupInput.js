import styles from "./SignupInput.module.scss";

const SignupInput = function ({ label, id, type = "text", className }) {
  const { signupInput, signupInput__Label, signupInput__Input } = styles;
  return (
    <label htmlFor={id} className={`${signupInput} ${className}`}>
      <span className={signupInput__Label}>{label}</span>
      <input className={signupInput__Input} id={id} type={type} />
    </label>
  );
};

export default SignupInput;
