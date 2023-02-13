import styles from "./Profile.module.scss";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import SecuritySettings from "./SecuritySettings/SecuritySettings";
import ChevronLeftIcon from "../../components/UI/SVG/ChevronLeftIcon";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Profile = function () {
  const [currentSetting, setCurrentSetting] = useState("personal");
  const handleChangeSetting = function (setting) {
    setCurrentSetting(setting);
  };

  const resizeObserverRef = useRef(null);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);
  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      if (entries[0].contentRect.width <= 744) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  return (
    <div
      className={`${profile} ${
        !isSmallerScreen ? profileLarger : profileSmaller
      }`}
    >
      {isSmallerScreen && (
        <Link className={profile__BackBtn} to="/">
          <ChevronLeftIcon />
        </Link>
      )}
      <ProfileNav
        className={profile__Nav}
        currentSetting={currentSetting}
        onChangeSetting={handleChangeSetting}
        isSmallerScreen={isSmallerScreen}
      />
      {currentSetting === "personal" && <ProfileSettings />}
      {currentSetting === "security" && <SecuritySettings />}
    </div>
  );
};

export default Profile;

const {
  profile,
  ["profile--Larger"]: profileLarger,
  ["profile--SMaller"]: profileSmaller,
  profile__Nav,
  profile__BackBtn,
} = styles;
