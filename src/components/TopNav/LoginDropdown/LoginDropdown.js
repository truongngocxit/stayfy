import styles from "./LoginDropdown.module.scss";

const LoginDropdown = function () {
  const { loginDropdown, loginDropdown__Option } = styles;
  return (
    <div className={loginDropdown}>
      <div className={loginDropdown__Option}>
        <span>Login</span>
      </div>
      <div className={loginDropdown__Option}>
        <span>Signup</span>
      </div>
    </div>
  );
};

export default LoginDropdown;
