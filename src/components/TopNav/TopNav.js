import styles from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import ProfileButton from "./ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import HomeButton from "./HomeButton/HomeButton";
import { Link } from "react-router-dom";

const TopNav = function ({ hasSearchBar = true, isFixed }) {
  const { topNav, topNav__Logo, topNav__SearchBar, topNav__Menu } = styles;

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
      {!hasSearchBar && <HomeButton>Explore all stays</HomeButton>}

      <ProfileButton className={topNav__Menu} />
    </nav>
  );
};

export default TopNav;
