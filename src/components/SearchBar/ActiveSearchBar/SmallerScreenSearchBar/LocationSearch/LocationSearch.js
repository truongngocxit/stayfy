import styles from "./LocationSearch.module.scss";
import SearchIcon from "../../../../UI/SVG/SearchIcon";
import { useContext } from "react";
import useFetchData from "../../../../../custom-hooks/useFetchData";
import LocationSearchDropdown from "../../../LocationSearch/LocationSearchDropdown/LocationSearchDropdown";
import LocationSearchContext from "../../../../../contexts/searchContext/LocationSearchContextProvider";

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
    "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/locations.json"
  );

  let filteredLocations = locations.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredLocations.length > 5) {
    filteredLocations = filteredLocations.slice(0, 5);
  }

  const { location, location__Input, location__Searches } = styles;
  return (
    <div className={location}>
      <label className={location__Input}>
        <SearchIcon />
        <input
          autoComplete="off"
          placeholder="Search for places"
          value={searchQuery}
          onChange={(event) => {
            handleQueryChange(event);
          }}
          onBlur={handleStopTypingQuery}
          onFocus={handleStartTypingQuery}
        />
      </label>
      <div className={location__Searches}>
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
