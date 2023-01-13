import styles from "./Profile.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import SecuritySettings from "./SecuritySetting/SecuritySettings";
import { useState } from "react";

const Profile = function () {
  const [currentSetting, setCurrentSetting] = useState("personal");
  const handleChangeSetting = function (setting) {
    setCurrentSetting(setting);
  };
  const { profile, profile__Nav } = styles;
  return (
    <>
      <TopNav />
      <div className={profile}>
        <ProfileNav
          className={profile__Nav}
          currentSetting={currentSetting}
          onChangeSetting={handleChangeSetting}
        />
        {currentSetting === "personal" && <ProfileSettings items={[]} />}
        {currentSetting === "security" && <SecuritySettings items={[]} />}
      </div>
      <StaticFooter />
    </>
  );
};

export default Profile;
