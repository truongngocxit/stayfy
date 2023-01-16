import styles from "./TopNav.module.scss";
import MainLogo from "../UI/MainLogo/MainLogo";
import ProfileButton from "./ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import LoginDropdown from "./LoginDropdown/LoginDropdown";
import useDropdown from "../../custom-hooks/useDropdown";
import { Link } from "react-router-dom";

const TopNav = function ({ hasSearchBar = true }) {
  const { topNav, topNav__Logo, topNav__SearchBar, topNav__Menu } = styles;
  const { dropdownIsVisible, dropdownRef, handleOpenDropdown } = useDropdown();
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
      <div className={topNav__Menu} ref={dropdownRef}>
        <ProfileButton onClick={handleOpenDropdown} />
        {dropdownIsVisible && <LoginDropdown />}
      </div>
    </nav>
  );
};

export default TopNav;
