import styles from "./ProfileSettings.module.scss";
import ProfileSettingItem from "../ProfileSettingItem/ProfileSettingItem";

const ProfileSettings = function ({ className }) {
  const { profile__Settings, profile__Settings__Heading } = styles;
  return (
    <div className={`${profile__Settings} ${className}`}>
      <h3 className={profile__Settings__Heading}>Personal Details</h3>
      <div>
        <ProfileSettingItem />
        <ProfileSettingItem />
        <ProfileSettingItem />
      </div>
    </div>
  );
};

export default ProfileSettings;
