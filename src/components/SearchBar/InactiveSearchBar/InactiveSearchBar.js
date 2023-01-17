import styles from "./InactiveSearchBar.module.scss";
import SearchIcon from "../../UI/SVG/SearchIcon";

const InactiveSearchBar = function ({
  className,
  onStartSearching,
  isCollapse,
}) {
  const {
    searchBar,
    searchBar__Collapse,
    searchBar__Place,
    searchBar__Time,
    searchBar__Guests,
    searchBar__Btn,
  } = styles;
  return (
    <div
      className={`${searchBar} ${className} ${
        isCollapse ? searchBar__Collapse : ""
      }`}
      onClick={onStartSearching}
    >
      <div className={searchBar__Place}>
        <button>All places</button>
      </div>
      <div className={searchBar__Time}>
        <button>Any time</button>
      </div>
      <div className={searchBar__Guests}>
        <button>For 1 guest</button>
      </div>
      <div className={searchBar__Btn}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default InactiveSearchBar;
