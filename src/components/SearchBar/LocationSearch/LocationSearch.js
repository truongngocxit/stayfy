import styles from "./LocationSearch.module.scss";
import LocationSearchDropdown from "./LocationSearchDropdown/LocationSearchDropdown";
import useFetchData from "../../../custom-hooks/useFetchData";
import { useContext, forwardRef, useEffect } from "react";
import LocationSearchContext from "../../../contexts/searchContext/LocationSearchContextProvider";
import useDropdown from "../../../custom-hooks/useDropdown";
import CloseIcon from "../../UI/SVG/CloseIcon";

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
    resetLocationQuery,
  } = useContext(LocationSearchContext);

  const {
    dropdownIsVisible,
    dropdownRef,
    containerRef,
    handleCloseDropdown,
    handleOpenDropdown,
  } = useDropdown();

  const handleClearQuery = function (event) {
    event.stopPropagation();
    resetLocationQuery();
  };

  const { data: locations } = useFetchData(
    "https://stayfy-backend.onrender.com/all-docs/locations"
  );

  let filteredLocations = locations.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredLocations.length > 5) {
    filteredLocations = filteredLocations.slice(0, 5);
  }

  useEffect(() => {
    const handleClickOutsideSearch = function (event) {
      if (!containerRef.current.contains(event.target)) {
        handleStopTypingQuery();
      }
    };

    document.documentElement.addEventListener(
      "click",
      handleClickOutsideSearch
    );

    return () =>
      document.documentElement.removeEventListener(
        "click",
        handleClickOutsideSearch
      );
  }, [containerRef, handleStopTypingQuery]);

  const {
    locationSearch,
    locationSearch__ClearBtn,
    locationSearch__ClearBtn__Hidden,
  } = styles;

  return (
    <label
      className={`${locationSearch} ${className} ${
        isTypingQuery || dropdownIsVisible ? activeClassName : ""
      }`}
      ref={containerRef}
      htmlFor="place"
      onClick={handleStartTypingQuery}
    >
      <span htmlFor="place">Where</span>
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
      />
      <button
        type="button"
        className={`${locationSearch__ClearBtn} ${
          isTypingQuery && searchQuery !== ""
            ? ""
            : locationSearch__ClearBtn__Hidden
        }`}
        onClick={handleClearQuery}
      >
        <CloseIcon />
      </button>
      {dropdownIsVisible && (
        <LocationSearchDropdown
          ref={dropdownRef}
          locations={filteredLocations}
          setQuery={setQuery}
          onCloseDropdown={handleCloseDropdown}
          onFinishSearch={onFinishSearch}
        />
      )}
    </label>
  );
};

export default forwardRef(LocationSearch);
