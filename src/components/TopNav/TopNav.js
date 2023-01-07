import styles from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import ProfileButton from "../UI/ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";

const TopNav = function () {
  const { topNav, topNav__Logo, topNav__SearchBar, topNav__Menu } = styles;
  return (
    <nav className={topNav}>
      <div className={topNav__Logo}>
        <MainLogo />
      </div>
      <div className={topNav__SearchBar}>
        <SearchBar />
      </div>
      <div className={topNav__Menu}>
        <ProfileButton />
      </div>
    </nav>
  );
};

export default TopNav;
