import styles from "./ProfileSettings.module.scss";
import ProfileSettingItem from "../ProfileSettingItem/ProfileSettingItem";
import NameSettingForm from "../NameSettingForm/NameSettingForm";

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
      <div className={profile__Settings__ItemsContainer}>
        <div className={profile__Settings__Item}>
          <ProfileSettingItem>
            <NameSettingForm />
          </ProfileSettingItem>
        </div>
        <div className={profile__Settings__Item}>
          <ProfileSettingItem />
        </div>
        <div className={profile__Settings__Item}>
          <ProfileSettingItem />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
