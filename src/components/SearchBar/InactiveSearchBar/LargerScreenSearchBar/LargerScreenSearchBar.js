import styles from "./LargerScreenSearchBar.module.scss";
import SearchIcon from "../../../UI/SVG/SearchIcon";

const LargeScreenSearchBar = function ({
  className,
  query,
  dateString,
  guests,
  onClick,
}) {
  const { searchBar, searchBar__Place, searchBar__Guests, searchBar__Btn } =
    styles;
  return (
    <div className={`${searchBar} ${className}`} onClick={onClick}>
      <div className={searchBar__Place}>
        <button>{query || "All places"}</button>
      </div>
      <div className={searchBar__Place}>
        <button>{dateString}</button>
      </div>
      <div className={searchBar__Guests}>
        <button>
          {guests.adults
            ? `${guests.adults + guests.children} guests`
            : "For 1 guest"}
        </button>
      </div>
      <div className={searchBar__Btn}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default LargeScreenSearchBar;
