import styles from "./ProfileButton.module.scss";
import Hamburger from "../../UI/SVG/Hamburger";
import useDropdown from "../../../custom-hooks/useDropdown";
import LoginDropdown from "./LoginDropdown/LoginDropdown";
import { useSelector } from "react-redux";

const ProfileButton = function ({ className }) {
  const { dropdownIsVisible, containerRef, handleOpenDropdown } = useDropdown();
  const activeUserProfileImage = useSelector(
    (state) => state.activeUser.profileImage
  );
  const {
    profileBtn,
    profileBtn__Container,
    profileBtn__Hamburger,
    profileBtn__Image,
  } = styles;
  return (
    <div ref={containerRef} className={`${className} ${profileBtn__Container}`}>
      <button className={profileBtn} onClick={handleOpenDropdown}>
        <div className={profileBtn__Hamburger}>
          <Hamburger />
        </div>
        <div className={profileBtn__Image}>
          <img
            alt="profile avatar"
            src={
              activeUserProfileImage ||
              "https://firebasestorage.googleapis.com/v0/b/stayfy-d4fc1.appspot.com/o/misc%2Fplaceholder-profile-image.png?alt=media&token=d7ee83a6-7b08-49e1-9d75-14de009335c9"
            }
          />
        </div>
      </button>
      {dropdownIsVisible && <LoginDropdown />}
    </div>
  );
};

export default ProfileButton;
