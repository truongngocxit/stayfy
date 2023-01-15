import styles from "./LoginButton.module.scss";

const LoginButton = function ({ className, text }) {
  const { loginButton } = styles;
  return <button className={`${className} ${loginButton}`}>{text}</button>;
};

export default LoginButton;
