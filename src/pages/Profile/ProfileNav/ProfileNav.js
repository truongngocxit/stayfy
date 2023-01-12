import styles from "./ProfileNav.module.scss";
import SecurityIcon from "../../../components/UI/SVG/SecurityIcon";
import ProfileIcon from "../../../components/UI/SVG/ProfileIcon";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";

const ProfileNav = function ({ className }) {
  const { profileNav, profileNav__Btn } = styles;
  return (
    <nav className={`${profileNav} ${className}`}>
      <button className={profileNav__Btn}>
        <ProfileIcon />
        <span>Personal details</span>
      </button>
      <LineBreak />
      <button className={profileNav__Btn}>
        <SecurityIcon />
        <span>Security</span>
      </button>
    </nav>
  );
};

export default ProfileNav;
