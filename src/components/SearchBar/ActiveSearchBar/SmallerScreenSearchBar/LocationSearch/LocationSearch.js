import styles from "./LocationSearch.module.scss";
import SearchIcon from "../../../../UI/SVG/SearchIcon";
import { useContext } from "react";
import useFetchData from "../../../../../custom-hooks/useFetchData";
import LocationSearchDropdown from "../../../LocationSearch/LocationSearchDropdown/LocationSearchDropdown";
import LocationSearchContext from "../../../../../contexts/searchContext/LocationSearchContextProvider";
import { railwayBackendURL } from "../../../../../utils/conts";

const LocationSearch = function ({ onFinishSearch }) {
  const {
    searchQuery,
    handleQueryChange,
    isTypingQuery,
    handleStopTypingQuery,
    handleStartTypingQuery,
    setQuery,
  } = useContext(LocationSearchContext);

  const { data: locations } = useFetchData(
    `${railwayBackendURL}all-docs/locations`
  );

  let filteredLocations = locations.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredLocations.length > 5) {
    filteredLocations = filteredLocations.slice(0, 5);
  }

  return (
    <div className={location}>
      <label className={location__Input}>
        <SearchIcon />
        <input
          autoComplete="off"
          placeholder="Search for places"
          value={searchQuery}
          onChange={handleQueryChange}
          onBlur={handleStopTypingQuery}
          onFocus={handleStartTypingQuery}
        />
      </label>
      <div className={location__Dropdown}>
        <LocationSearchDropdown
          isAbsolute={false}
          locations={filteredLocations}
          setQuery={setQuery}
          onFinishSearch={onFinishSearch}
          onCloseDropdown={onFinishSearch}
        />
      </div>
    </div>
  );
};

export default LocationSearch;

const { location, location__Input, location__Dropdown } = styles;
