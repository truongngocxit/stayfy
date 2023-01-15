import styles from "./SignupButton.module.scss";

const SignupButton = function ({ className, text }) {
  const { signupBtn } = styles;
  return <button className={`${signupBtn} ${className}`}>{text}</button>;
};

export default SignupButton;
