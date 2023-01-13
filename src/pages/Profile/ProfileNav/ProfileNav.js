import styles from "./ProfileNav.module.scss";
import SecurityIcon from "../../../components/UI/SVG/SecurityIcon";
import ProfileIcon from "../../../components/UI/SVG/ProfileIcon";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";

const ProfileNav = function ({ className, currentSetting, onChangeSetting }) {
  console.log(currentSetting);
  const { profileNav, profileNav__Btn, profileNav__Btn__Active } = styles;
  return (
    <nav className={`${profileNav} ${className}`}>
      <button
        className={`${profileNav__Btn} ${
          currentSetting === "personal" ? profileNav__Btn__Active : ""
        }`}
        onClick={() => onChangeSetting("personal")}
      >
        <ProfileIcon />
        <span>Personal details</span>
      </button>
      <LineBreak />
      <button
        className={`${profileNav__Btn} ${
          currentSetting === "security" ? profileNav__Btn__Active : ""
        }`}
        onClick={() => onChangeSetting("security")}
      >
        <SecurityIcon />
        <span>Security</span>
      </button>
    </nav>
  );
};

export default ProfileNav;
