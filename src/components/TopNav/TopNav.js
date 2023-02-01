import styles from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import ProfileButton from "./ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import HomePageIcon from "../UI/SVG/HomePageIcon";
import { Link } from "react-router-dom";

const TopNav = function ({ hasSearchBar = true, isFixed }) {
  const {
    topNav,
    topNav__Logo,
    topNav__SearchBar,
    topNav__HomeRedirect,
    topNav__Menu,
  } = styles;

  return (
    <nav className={topNav}>
      <Link to="/" className={topNav__Logo}>
        <MainLogo />
      </Link>
      {hasSearchBar && (
        <div className={topNav__SearchBar}>
          <SearchBar />
        </div>
      )}
      {!hasSearchBar && (
        <Link className={topNav__HomeRedirect} to="/">
          <HomePageIcon />
          <span>Explore all stays</span>
        </Link>
      )}

      <ProfileButton className={topNav__Menu} />
    </nav>
  );
};

export default TopNav;
