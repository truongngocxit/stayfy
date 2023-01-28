import styles from "./LoginDropdown.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginDropdown = function () {
  const { isActive } = useSelector((state) => state.activeUser);
  const { loginDropdown, loginDropdown__Option } = styles;
  return (
    <div className={loginDropdown}>
      {!isActive && (
        <>
          <Link to="/login" className={loginDropdown__Option}>
            <span>Login</span>
          </Link>
          <Link to="/signup" className={loginDropdown__Option}>
            <span>Signup</span>
          </Link>
        </>
      )}
      {isActive && (
        <>
          <Link to="/profile" className={loginDropdown__Option}>
            <span>Profile</span>
          </Link>
          <Link to="/trips" className={loginDropdown__Option}>
            <span>Upcoming trips</span>
          </Link>
          <Link to="/signup" className={loginDropdown__Option}>
            <span>Logout</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginDropdown;
