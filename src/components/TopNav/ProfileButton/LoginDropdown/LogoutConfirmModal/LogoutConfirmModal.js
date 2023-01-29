import styles from "./LogoutConfirmModal.module.scss";

const LogoutConfirmModal = function ({ onAgreeLogout, onCancelLogout }) {
  const {
    logoutModal,
    logoutModal__Heading,
    logoutModal__AgreeBtn,
    logoutModal__CancelBtn,
  } = styles;
  return (
    <div className={logoutModal}>
      <h2 className={logoutModal__Heading}>
        Are you sure you want to log out?
      </h2>
      <button className={logoutModal__AgreeBtn} onClick={onAgreeLogout}>
        Sure
      </button>
      <button className={logoutModal__CancelBtn} onClick={onCancelLogout}>
        Cancel
      </button>
    </div>
  );
};

export default LogoutConfirmModal;
