import styles from "./LocationSearchDropdown.module.scss";
import SearchSuggestion from "./SearchSuggestion/SearchSuggestion";

const LocationSearchDropdown = function () {
  const { searchDropdown } = styles;
  return (
    <ul className={searchDropdown}>
      <SearchSuggestion search={"Ha Noi"} />
      <SearchSuggestion search={"Da Lat"} />
      <SearchSuggestion search={"Ha Long"} />
      <SearchSuggestion search={"Da Nang"} />
    </ul>
  );
};

export default LocationSearchDropdown;
