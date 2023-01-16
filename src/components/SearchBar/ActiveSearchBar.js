import styles from "./ActiveSearchBar.module.scss";
import SearchIcon from "../UI/SVG/SearchIcon";
import Overlay from "../UI/Overlay/Overlay";
import LocationSearchDropdown from "./LocationSearchDropdown/LocationSearchDropdown";
import GuestNumberDropdown from "./GuestNumberDropdown/GuestNumberDropdown";
import { createPortal } from "react-dom";
import { useState } from "react";
import useDropdown from "../../custom-hooks/useDropdown";
import useInput from "../../custom-hooks/useInput";
import DateRangePicker from "../DateRangePicker/DateRangePicker";

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
    searchBar__Btn,
  } = styles;

  return (
    <>
      <div className={`${searchBar}  ${className}`}>
        <div
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
        </div>
        <div
          className={`${searchBar__Time} ${
            datePickerIsFocus ? searchBar__Active : ""
          }`}
        >
          <DateRangePicker
            onFocus={handleFocusDatePicker}
            onBlur={handleBlurDatePicker}
          />
        </div>
        <div
          className={`${searchBar__Guests} ${
            dropdownIsVisible ? searchBar__Active : ""
          }`}
          onClick={handleOpenDropdown}
          ref={dropdownRef}
        >
          <button>Add guests</button>
          {dropdownIsVisible && (
            <GuestNumberDropdown style={{ width: "300%" }} />
          )}
        </div>
        <button className={searchBar__Btn}>
          <SearchIcon />
          <span>Search</span>
        </button>
      </div>
      {createPortal(
        <Overlay onClick={onStopSearching} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default SearchBar;
