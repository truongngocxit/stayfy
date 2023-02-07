import styles from "./LoginDropdown.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { activeUserActions } from "../../../../redux-store/activeUserSlice";
import { useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "../../../UI/Overlay/Overlay";
import LogoutConfirmModal from "./LogoutConfirmModal/LogoutConfirmModal";

const LoginDropdown = function ({ onClickOption, loginDropdownStyle }) {
  const { isActive } = useSelector((state) => state.activeUser);
  const { loginDropdown } = styles;

  return (
    <div className={loginDropdown} style={loginDropdownStyle}>
      {!isActive && <InactiveDropdown onClickOption={onClickOption} />}
      {isActive && <ActiveDropdown onClickOption={onClickOption} />}
    </div>
  );
};

export default LoginDropdown;

const InactiveDropdown = function ({ onClickOption }) {
  const { loginDropdown__Option } = styles;
  return (
    <>
      <Link
        to="/login"
        className={loginDropdown__Option}
        onClick={onClickOption}
      >
        <span>Login</span>
      </Link>
      <Link
        to="/signup"
        className={loginDropdown__Option}
        onClick={onClickOption}
      >
        <span>Signup</span>
      </Link>
    </>
  );
};

const ActiveDropdown = function ({ onClickOption }) {
  const [isConfirmLogout, setIsConfirmLogout] = useState(false);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const handleConfirmLogout = function () {
    reduxDispatch(activeUserActions.userLogout());
    navigate("/", { replace: true });
  };

  const handleOpenConfirmLogout = function () {
    setIsConfirmLogout(true);
  };

  const handleCloseConfirmLogout = function () {
    setIsConfirmLogout(false);
    onClickOption();
  };

  const { loginDropdown__Option, loginDropdown__Logout } = styles;
  return (
    <>
      <Link
        to="/profile"
        className={loginDropdown__Option}
        onClick={onClickOption}
      >
        <span>Profile</span>
      </Link>
      <Link
        to="/trips"
        className={loginDropdown__Option}
        onClick={onClickOption}
      >
        <span>Upcoming trips</span>
      </Link>
      <button
        to="/"
        className={loginDropdown__Logout}
        onClick={handleOpenConfirmLogout}
      >
        <span>Logout</span>
      </button>
      {isConfirmLogout &&
        createPortal(
          <Overlay zIndex={1200} onClick={handleCloseConfirmLogout} />,
          document.getElementById("overlay-root")
        )}
      {isConfirmLogout &&
        createPortal(
          <LogoutConfirmModal
            onAgreeLogout={handleConfirmLogout}
            onCancelLogout={handleCloseConfirmLogout}
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};
