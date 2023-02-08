import styles from "./ProfileNav.module.scss";
import SecurityIcon from "../../../components/UI/SVG/SecurityIcon";
import ProfileIcon from "../../../components/UI/SVG/ProfileIcon";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";
const ProfileNav = function ({
  className,
  currentSetting,
  onChangeSetting,
  isSmallerScreen = false,
}) {
  const {
    profileNav,
    profileNav__Larger,
    profileNav__Smaller,
    profileNav__Btn,
    profileNav__Btn__Active,
    profileNav__Icon,
    profileNav__Back,
  } = styles;
  return (
    <nav
      className={`${profileNav} ${
        isSmallerScreen ? profileNav__Smaller : profileNav__Larger
      } ${className}`}
    >
      <button
        className={`${profileNav__Btn} ${
          currentSetting === "personal" ? profileNav__Btn__Active : ""
        }`}
        onClick={() => onChangeSetting("personal")}
      >
        <div className={profileNav__Icon}>
          <ProfileIcon />
        </div>
        <span>Personal</span>
      </button>
      {!isSmallerScreen && <LineBreak />}
      <button
        className={`${profileNav__Btn} ${
          currentSetting === "security" ? profileNav__Btn__Active : ""
        }`}
        onClick={() => onChangeSetting("security")}
      >
        <div className={profileNav__Icon}>
          <SecurityIcon />
        </div>

        <span>Security</span>
      </button>
    </nav>
  );
};

export default ProfileNav;
