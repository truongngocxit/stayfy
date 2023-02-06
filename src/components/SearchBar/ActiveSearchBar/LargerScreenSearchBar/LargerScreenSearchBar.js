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
  const {
    searchBar,
    searchBar__Collapse,
    searchBar__Place,
    searchBar__Time,
    searchBar__Guests,
    searchBar__Active,
  } = styles;
  return (
    <div
      className={`${searchBar}  ${className} ${
        isCollapse ? searchBar__Collapse : ""
      }`}
    >
      <LocationSearch
        activeClassName={searchBar__Active}
        className={searchBar__Place}
        onFinishSearch={handleFocusDateSearch}
        ref={locationSearchRef}
      />

      <DateSearch
        className={searchBar__Time}
        activeClassName={searchBar__Active}
        onFinishSearch={handleFocusGuestNumSearch}
        ref={dateSearchRef}
      />

      <GuestNumber
        className={searchBar__Guests}
        activeClassName={searchBar__Active}
        ref={guestNumSearchRef}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </div>
  );
};

export default LargerScreenSearchBar;
