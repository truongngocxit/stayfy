import styles from "./InactiveSearchBar.module.scss";
import SearchIcon from "../../UI/SVG/SearchIcon";
import { useSelector } from "react-redux";

const InactiveSearchBar = function ({
  className,
  onStartSearching,
  isCollapse,
}) {
  const query = useSelector((state) => state.search.query) || null;
  const date = useSelector((state) => state.search.date) || null;
  const guests = useSelector((state) => state.search.guestNum) || null;

  const {
    searchBar,
    searchBar__Collapse,
    searchBar__Place,
    searchBar__Time,
    searchBar__Guests,
    searchBar__Btn,
  } = styles;

  let dateString = "Anytime";

  if (date.start && date.end) {
    dateString = `${new Date(date.start).toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
    })} - ${new Date(date.end).toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
    })}`;
  }

  return (
    <div
      className={`${searchBar} ${className} ${
        isCollapse ? searchBar__Collapse : ""
      }`}
      onClick={onStartSearching}
    >
      <div className={searchBar__Place}>
        <button>{query || "All places"}</button>
      </div>
      <div className={searchBar__Time}>
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

export default InactiveSearchBar;
