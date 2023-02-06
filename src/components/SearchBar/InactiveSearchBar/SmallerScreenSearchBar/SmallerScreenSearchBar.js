import styles from "./SmallerScreenSearchBar.module.scss";
import SearchIcon from "../../../UI/SVG/SearchIcon";
import FilterButton from "../../../FilterMenu/FilterButton/FilterButton";

const SmallerScreenSearchBar = function ({
  query,
  dateString,
  guests,
  className,
  onClick,
}) {
  const {
    searchBar,
    searchBar__Filter,
    searchBar__Search,
    searchBar__Search__Icon,
    searchBar__Search__Main,
    searchBar__Search__Main__Place,
    searchBar__Search__Main__DateAndGuests,
  } = styles;
  return (
    <div className={`${searchBar} ${className}`} onClick={onClick}>
      <div className={searchBar__Search}>
        <div className={searchBar__Search__Icon}>
          <SearchIcon />
        </div>
        <div className={searchBar__Search__Main}>
          <div className={searchBar__Search__Main__Place}>
            <span>{query || "All places"}</span>
          </div>
          <div className={searchBar__Search__Main__DateAndGuests}>
            <span>{dateString}</span>
            <span>·</span>
            <span>
              {guests.adults
                ? `${guests.adults + guests.children} guests`
                : "For 1 guest"}
            </span>
          </div>
        </div>
      </div>
      <div className={searchBar__Filter}>
        <FilterButton hasText={false} />
      </div>
    </div>
  );
};

export default SmallerScreenSearchBar;
