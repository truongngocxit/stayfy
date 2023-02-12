import styles from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import ProfileButton from "./ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import HomeButton from "./HomeButton/HomeButton";
import { Link } from "react-router-dom";

const TopNav = function ({ hasSearchBar = true, isTabletScreen }) {
  return (
    <nav className={topNav}>
      {!isTabletScreen && (
        <Link to="/" className={topNav__Logo}>
          <MainLogo />
        </Link>
      )}

      {hasSearchBar ? (
        <div className={topNav__SearchBar}>
          <SearchBar isTabletScreen={isTabletScreen} />
        </div>
      ) : (
        <div className={topNav__Home}>
          <HomeButton>Explore all stays</HomeButton>
        </div>
      )}
      {!isTabletScreen && <ProfileButton className={topNav__ProfileBtn} />}
    </nav>
  );
};

export default TopNav;

const {
  topNav,
  topNav__Logo,
  topNav__SearchBar,
  topNav__Home,
  topNav__ProfileBtn,
} = styles;
