import styles from "./ActiveSearchBar.module.scss";
import SearchIcon from "../UI/SVG/SearchIcon";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const SearchBar = function ({ className }) {
  const {
    searchBar,
    searchBar__Place,
    searchBar__Time,
    searchBar__Guests,
    searchBar__Btn,
  } = styles;

  const datePickerInlineStyle = {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: "20px",
    fontFamily: "inherit",
    gap: "1rem",
  };

  return (
    <div className={`${searchBar} ${className}`}>
      <div className={searchBar__Place}>
        <label htmlFor="place">Where</label>
        <input id="place" placeholder="Search for places" />
      </div>
      <div className={searchBar__Time}>
        <RangePicker
          style={datePickerInlineStyle}
          placeholder={["Checkin", "Checkout"]}
        />
      </div>
      <div className={searchBar__Guests}>
        <button>Add guests</button>
      </div>
      <button className={searchBar__Btn}>
        <SearchIcon />
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
