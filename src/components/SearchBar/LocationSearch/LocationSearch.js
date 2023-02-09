import styles from "./LocationSearch.module.scss";
import LocationSearchDropdown from "./LocationSearchDropdown/LocationSearchDropdown";
import useFetchData from "../../../custom-hooks/useFetchData";
import { useContext, forwardRef } from "react";
import LocationSearchContext from "../../../contexts/searchContext/LocationSearchContextProvider";
import useDropdown from "../../../custom-hooks/useDropdown";

const LocationSearch = function (
  { activeClassName, className, onFinishSearch },
  ref
) {
  const {
    searchQuery,
    handleQueryChange,
    isTypingQuery,
    handleStopTypingQuery,
    handleStartTypingQuery,
    setQuery,
  } = useContext(LocationSearchContext);

  const {
    dropdownIsVisible,
    dropdownRef,
    containerRef,
    handleCloseDropdown,
    handleOpenDropdown,
  } = useDropdown();

  const { data: locations } = useFetchData(
    "https://stayfy-backend.onrender.com/all-docs/locations"
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
      ref={containerRef}
    >
      <label htmlFor="place">Where</label>
      <input
        ref={ref}
        autoComplete="off"
        id="place"
        placeholder="Search for places"
        value={searchQuery}
        onChange={(event) => {
          handleQueryChange(event);
          handleOpenDropdown();
        }}
        onBlur={handleStopTypingQuery}
        onFocus={handleStartTypingQuery}
      />
      {dropdownIsVisible && (
        <LocationSearchDropdown
          ref={dropdownRef}
          locations={filteredLocations}
          setQuery={setQuery}
          onCloseDropdown={handleCloseDropdown}
          onFinishSearch={onFinishSearch}
        />
      )}
    </div>
  );
};

export default forwardRef(LocationSearch);
