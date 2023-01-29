import styles from "./SecuritySettings.module.scss";
import PasswordSetting from "./PasswordSetting/PasswordSetting";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import { useReducer } from "react";

const SecuritySettings = function ({ className }) {
  const [
    { changePasswordIsActive, deleteAccountIsActive },
    dispatchActiveForm,
  ] = useReducer(activeFormReducer, initialActiveForm);

  const handleChangePasswordActive = function () {
    dispatchActiveForm("CHANGE_PASSWORD_ACTIVE");
  };

  const handleDeleteAccountActive = function () {
    dispatchActiveForm("DELETE_ACCOUNT_ACTIVE");
  };

  const handleFormsInactive = function () {
    dispatchActiveForm("FORMS_INACTIVE");
  };

  const {
    securitySettings,
    securitySettings__Item,
    securitySettings__Heading,
    securitySettings_ItemsContainer,
  } = styles;
  return (
    <div className={`${securitySettings} ${className}`}>
      <h3 className={securitySettings__Heading}>Security Settings</h3>
      <div className={securitySettings_ItemsContainer}>
        <div className={securitySettings__Item}>
          <PasswordSetting
            onOpenPasswordForm={handleChangePasswordActive}
            onClosePasswordForm={handleFormsInactive}
            passwordFormIsActive={changePasswordIsActive}
          />
        </div>
        <div className={securitySettings__Item}>
          <DeleteAccount
            onOpenDeleteAccountForm={handleDeleteAccountActive}
            onCloseDeleteAccountForm={handleFormsInactive}
            deleteAccountFormIsActive={deleteAccountIsActive}
          />
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;

const activeFormReducer = function (state, action) {
  switch (action) {
    case "CHANGE_PASSWORD_ACTIVE":
      return {
        deleteAccountIsActive: false,
        changePasswordIsActive: true,
      };
    case "DELETE_ACCOUNT_ACTIVE":
      return {
        changePasswordIsActive: false,
        deleteAccountIsActive: true,
      };
    case "FORMS_INACTIVE":
      return {
        changePasswordIsActive: false,
        deleteAccountIsActive: false,
      };
    default:
      return { ...state };
  }
};

const initialActiveForm = {
  changePasswordIsActive: false,
  deleteAccountIsActive: false,
};
