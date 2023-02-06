import styles from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import ProfileButton from "./ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import HomeButton from "./HomeButton/HomeButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TopNav = function ({ hasSearchBar = true, isSmallerScreen }) {
  const { topNav, topNav__Logo, topNav__SearchBar, topNav__ProfileBtn } =
    styles;

  return (
    <nav className={topNav}>
      {!isSmallerScreen && (
        <Link to="/" className={topNav__Logo}>
          <MainLogo />
        </Link>
      )}
      <div className={topNav__SearchBar}>
        {hasSearchBar && <SearchBar isSmallerScreen={isSmallerScreen} />}
        {!hasSearchBar && <HomeButton>Explore all stays</HomeButton>}
      </div>
      {!isSmallerScreen && <ProfileButton className={topNav__ProfileBtn} />}
    </nav>
  );
};

export default TopNav;
