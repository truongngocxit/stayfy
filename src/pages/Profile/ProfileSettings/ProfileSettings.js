import styles from "./ProfileSettings.module.scss";
import NameSettingForm from "../NameSettingForm/NameSettingForm";
import EmailSettingForm from "../EmailSettingForm/EmailSettingForm";
import PhoneSettingForm from "../PhoneSettingForm/PhoneSettingForm";
import ProfileImageUpload from "../ProfileImageUpload/ProfileImageUpload";
const ProfileSettings = function ({ className }) {
  const {
    profile__Settings,
    profile__Settings__Heading,
    profile__Settings__ItemsContainer,
    profile__Settings__Item,
  } = styles;
  return (
    <div className={`${profile__Settings} ${className}`}>
      <h3 className={profile__Settings__Heading}>Personal Details</h3>
      <ProfileImageUpload />
      <div className={profile__Settings__ItemsContainer}>
        <div className={profile__Settings__Item}>
          <NameSettingForm />
        </div>
        <div className={profile__Settings__Item}>
          <EmailSettingForm />
        </div>
        <div className={profile__Settings__Item}>
          <PhoneSettingForm />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
