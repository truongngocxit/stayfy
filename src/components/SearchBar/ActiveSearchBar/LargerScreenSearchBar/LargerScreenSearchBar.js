import styles from "./LargerScreenSearchBar.module.scss";
import LocationSearch from "../../LocationSearch/LocationSearch";
import DateSearch from "../../DateSearch/DateSearch";
import GuestNumber from "../../GuestNumber/GuestNumber";
import SearchButton from "../../SearchButton/SearchButton";

const LargerScreenSearchBar = function ({
  guestNumSearchRef,
  locationSearchRef,
  dateSearchRef,
  isCollapse,
  className,
  handleFocusDateSearch,
  handleFocusGuestNumSearch,
  handleSearch,
}) {
  return (
    <div
      className={`${searchBar}  ${className} ${
        isCollapse ? searchBarCollapse : ""
      }`}
    >
      <LocationSearch
        activeClassName={searchBarActive}
        className={searchBar__Place}
        onFinishSearch={handleFocusDateSearch}
        ref={locationSearchRef}
      />

      <DateSearch
        className={searchBar__Time}
        activeClassName={searchBarActive}
        onFinishSearch={handleFocusGuestNumSearch}
        ref={dateSearchRef}
      />

      <GuestNumber
        className={searchBar__Guests}
        activeClassName={searchBarActive}
        ref={guestNumSearchRef}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </div>
  );
};

export default LargerScreenSearchBar;

const {
  searchBar,
  ["searchBar--Collapse"]: searchBarCollapse,
  searchBar__Place,
  searchBar__Time,
  searchBar__Guests,
  ["searchBar--Active"]: searchBarActive,
} = styles;
