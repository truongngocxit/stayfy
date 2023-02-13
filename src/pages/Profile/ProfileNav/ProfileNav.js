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
  return (
    <nav
      className={`${profileNav} ${
        isSmallerScreen ? profileNavSmaller : profileNavLarger
      } ${className}`}
    >
      <button
        className={`${profileNav__Btn} ${
          currentSetting === "personal" ? profileNav__BtnActive : ""
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
          currentSetting === "security" ? profileNav__BtnActive : ""
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

const {
  profileNav,
  ["profileNav--Larger"]: profileNavLarger,
  ["profileNav--Smaller"]: profileNavSmaller,
  profileNav__Btn,
  ["profileNav__Btn--Active"]: profileNav__BtnActive,
  profileNav__Icon,
} = styles;
