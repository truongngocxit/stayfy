import styles from "./ProfileSettings.module.scss";
import NameSettingForm from "./NameSettingForm/NameSettingForm";
import EmailSettingForm from "./EmailSettingForm/EmailSettingForm";
import PhoneSettingForm from "./PhoneSettingForm/PhoneSettingForm";
import ProfileImageUpload from "../ProfileImageUpload/ProfileImageUpload";
import { useSelector } from "react-redux";

const ProfileSettings = function ({ className }) {
  const { lastName, firstName, email, phone } = useSelector(
    (state) => state.activeUser
  );
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
          <NameSettingForm
            activeUserLastName={lastName}
            activeUserFirstName={firstName}
          />
        </div>
        <div className={profile__Settings__Item}>
          <EmailSettingForm activeUserEmail={email} />
        </div>
        <div className={profile__Settings__Item}>
          <PhoneSettingForm activeUserPhone={phone} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
