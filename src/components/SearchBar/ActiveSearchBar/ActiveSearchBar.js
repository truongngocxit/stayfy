import styles from "./ActiveSearchBar.module.scss";
import LocationSearch from "../LocationSearch/LocationSearch";
import DateSearch from "../DateSearch/DateSearch";
import GuestNumber from "../GuestNumber/GuestNumber";
import SearchButton from "../SearchButton/SearchButton";

const SearchBar = function ({ className, onStopSearching, isCollapse }) {
  const {
    searchBar,
    searchBar__Collapse,
    searchBar__Place,
    searchBar__Active,
    searchBar__Time,
    searchBar__Guests,
  } = styles;

  const handleSearch = function () {};

  return (
    <>
      <div
        className={`${searchBar}  ${className} ${
          isCollapse ? searchBar__Collapse : ""
        }`}
      >
        <LocationSearch
          activeClassName={searchBar__Active}
          className={searchBar__Place}
        />

        <DateSearch
          className={searchBar__Time}
          activeClassName={searchBar__Active}
        />

        <GuestNumber
          className={searchBar__Guests}
          activeClassName={searchBar__Active}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
    </>
  );
};

export default SearchBar;
