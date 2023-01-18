import styles from "./LoginDropdown.module.scss";
import { Link } from "react-router-dom";

const LoginDropdown = function () {
  const { loginDropdown, loginDropdown__Option } = styles;
  return (
    <div className={loginDropdown}>
      <Link to="/login" className={loginDropdown__Option}>
        <span>Login</span>
      </Link>
      <Link to="/signup" className={loginDropdown__Option}>
        <span>Signup</span>
      </Link>
    </div>
  );
};

export default LoginDropdown;
