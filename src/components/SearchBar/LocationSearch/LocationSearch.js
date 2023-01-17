import styles from "./LocationSearch.module.scss";
import LocationSearchDropdown from "./LocationSearchDropdown/LocationSearchDropdown";
import useInput from "../../../custom-hooks/useInput";
import useFetchData from "../../../custom-hooks/useFetchData";

const LocationSearch = function ({ activeClassName, className }) {
  const {
    input: searchQuery,
    handleInputChange: handleQueryChange,
    isTyping: isTypingQuery,
    handleStopTyping: handleStopTypingQuery,
    handleStartTyping: handleStartTypingQuery,
    setInput: setQuery,
  } = useInput();

  const { data: locations } = useFetchData(
    "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/locations.json"
  );

  let filteredLocations = locations.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredLocations.length > 5) {
    filteredLocations = filteredLocations.slice(0, 5);
  }

  const { locationSearch } = styles;
  return (
    <div
      className={`${locationSearch} ${className} ${
        isTypingQuery ? activeClassName : ""
      }`}
    >
      <label htmlFor="place">Where</label>
      <input
        id="place"
        placeholder="Search for places"
        value={searchQuery}
        onChange={handleQueryChange}
        onBlur={handleStopTypingQuery}
        onFocus={handleStartTypingQuery}
      />
      {searchQuery !== "" && isTypingQuery && (
        <LocationSearchDropdown
          locations={filteredLocations}
          setQuery={setQuery}
        />
      )}
    </div>
  );
};

export default LocationSearch;
