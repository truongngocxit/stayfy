import styles from "./ProfileSettings.module.scss";
import NameSettingForm from "./NameSettingForm/NameSettingForm";
import EmailSettingForm from "./EmailSettingForm/EmailSettingForm";
import PhoneSettingForm from "./PhoneSettingForm/PhoneSettingForm";
import ProfileImageUpload from "../ProfileImageUpload/ProfileImageUpload";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const ProfileSettings = function ({ className }) {
  const { lastName, firstName, email, phone } = useSelector(
    (state) => state.activeUser
  );

  const [
    { emailIsActive, phoneIsActive, nameIsActive, imageIsActive },
    dispatchActiveProfileForm,
  ] = useReducer(activeProfileFormReducer, initialActiveProfileFormState);

  const handleNameFormActive = function () {
    dispatchActiveProfileForm("NAME_ACTIVE");
  };

  const handleEmailFormActive = function () {
    dispatchActiveProfileForm("EMAIL_ACTIVE");
  };

  const handlePhoneFormActive = function () {
    dispatchActiveProfileForm("PHONE_ACTIVE");
  };

  const handleImageUpdateActive = function () {
    dispatchActiveProfileForm("IMAGE_ACTIVE");
  };

  const handleFormsInactive = function () {
    dispatchActiveProfileForm("FORM_INACTIVE");
  };

  return (
    <div className={`${profileSettings} ${className}`}>
      <h3 className={profileSettings__Heading}>Personal Details</h3>
      <ProfileImageUpload
        onOpenImageUpdate={handleImageUpdateActive}
        onCloseImageUpdate={handleFormsInactive}
        imageUpdateIsActive={imageIsActive}
      />
      <div className={profileSettings__ItemsContainer}>
        <div className={profileSettings__Item}>
          <NameSettingForm
            activeUserLastName={lastName}
            activeUserFirstName={firstName}
            nameFormIsActive={nameIsActive}
            onOpenNameForm={handleNameFormActive}
            onCloseNameForm={handleFormsInactive}
          />
        </div>
        <div className={profileSettings__Item}>
          <EmailSettingForm
            activeUserEmail={email}
            emailFormIsActive={emailIsActive}
            onOpenEmailForm={handleEmailFormActive}
            onCloseEmailForm={handleFormsInactive}
          />
        </div>
        <div className={profileSettings__Item}>
          <PhoneSettingForm
            activeUserPhone={phone}
            phoneFormIsActive={phoneIsActive}
            onOpenPhoneForm={handlePhoneFormActive}
            onClosePhoneForm={handleFormsInactive}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;

const {
  profileSettings,
  profileSettings__Heading,
  profileSettings__ItemsContainer,
  profileSettings__Item,
} = styles;

const activeProfileFormReducer = function (state, action) {
  switch (action) {
    case "EMAIL_ACTIVE":
      return {
        imageIsActive: false,
        nameIsActive: false,
        phoneIsActive: false,
        emailIsActive: true,
      };
    case "NAME_ACTIVE":
      return {
        imageIsActive: false,
        phoneIsActive: false,
        emailIsActive: false,
        nameIsActive: true,
      };
    case "PHONE_ACTIVE":
      return {
        imageIsActive: false,
        emailIsActive: false,
        nameIsActive: false,
        phoneIsActive: true,
      };
    case "IMAGE_ACTIVE":
      return {
        emailIsActive: false,
        nameIsActive: false,
        phoneIsActive: false,
        imageIsActive: true,
      };

    case "FORM_INACTIVE": {
      return {
        nameIsActive: false,
        phoneIsActive: false,
        emailIsActive: false,
        imageIsActive: false,
      };
    }
    default:
      return { ...state };
  }
};

const initialActiveProfileFormState = {
  imageIsActive: false,
  nameIsActive: false,
  phoneIsActive: false,
  emailIsActive: false,
};
