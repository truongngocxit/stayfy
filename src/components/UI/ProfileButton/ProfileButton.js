import styles from "./ProfileButton.module.scss";
import Hamburger from "../SVG/Hamburger";
import UserIcon from "../SVG/UserIcon";

const ProfileButton = function () {
  const { profileBtn, profileBtn__Hamburger, profileBtn__Image } = styles;
  return (
    <button className={profileBtn}>
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
