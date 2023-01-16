import styles from "./ActiveSearchBar.module.scss";
import SearchIcon from "../../UI/SVG/SearchIcon";
import Overlay from "../../UI/Overlay/Overlay";
import GuestNumberDropdown from "../GuestNumberDropdown/GuestNumberDropdown";
import { createPortal } from "react-dom";
import { useState } from "react";
import useDropdown from "../../../custom-hooks/useDropdown";
import useInput from "../../../custom-hooks/useInput";
import LocationSearch from "../LocationSearch/LocationSearch";
import DateSearch from "../DateSearch/DateSearch";
import GuestNumber from "../GuestNumber/GuestNumber";
import SearchButton from "../SearchButton/SearchButton";

const SearchBar = function ({ className, onStopSearching }) {
  const { dropdownIsVisible, dropdownRef, handleOpenDropdown } = useDropdown();

  const [datePickerIsFocus, setDatePickerIsFocus] = useState(false);
  const handleFocusDatePicker = function () {
    setDatePickerIsFocus(true);
  };
  const handleBlurDatePicker = function () {
    setDatePickerIsFocus(false);
  };

  const {
    input: searchQuery,
    handleInputChange: handleQueryChange,
    isTyping: isTypingQuery,
    handleStopTyping: handleStopTypingQuery,
    handleStartTyping: handleStartTypingQuery,
  } = useInput();

  const {
    searchBar,
    searchBar__Place,
    searchBar__Active,
    searchBar__Time,
    searchBar__Guests,
  } = styles;

  return (
    <>
      <div className={`${searchBar}  ${className}`}>
        <LocationSearch
          value={searchQuery}
          isTyping={isTypingQuery}
          onChange={handleQueryChange}
          onBlur={handleStopTypingQuery}
          onFocus={handleStartTypingQuery}
          className={`${searchBar__Place} ${
            isTypingQuery ? searchBar__Active : ""
          }`}
        />

        <DateSearch
          onFocus={handleFocusDatePicker}
          onBlur={handleBlurDatePicker}
          className={`${searchBar__Time} ${
            datePickerIsFocus ? searchBar__Active : ""
          }`}
        />

        <GuestNumber
          className={`${searchBar__Guests} ${
            dropdownIsVisible ? searchBar__Active : ""
          }`}
        />
        <SearchButton>Search</SearchButton>
      </div>
      {createPortal(
        <Overlay onClick={onStopSearching} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default SearchBar;

/* <div
          className={`${searchBar__Place} ${
            isTypingQuery ? searchBar__Active : ""
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
          {searchQuery !== "" && isTypingQuery && <LocationSearchDropdown />}
        </div> */

/* <div
          className={`${searchBar__Time} ${
            datePickerIsFocus ? searchBar__Active : ""
          }`}
        >
          <DateRangePicker
            onFocus={handleFocusDatePicker}
            onBlur={handleBlurDatePicker}
          />
        </div> */
