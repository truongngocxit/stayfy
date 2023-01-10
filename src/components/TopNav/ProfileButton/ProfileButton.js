import styles from "./ProfileButton.module.scss";
import Hamburger from "../../UI/SVG/Hamburger";
import UserIcon from "../../UI/SVG/UserIcon";

const ProfileButton = function ({ onClick }) {
  const { profileBtn, profileBtn__Hamburger, profileBtn__Image } = styles;
  return (
    <button className={profileBtn} onClick={onClick}>
      <div className={profileBtn__Hamburger}>
        <Hamburger />
      </div>
      <div className={profileBtn__Image}>
        <UserIcon />
      </div>
    </button>
  );
};

export default ProfileButton;
