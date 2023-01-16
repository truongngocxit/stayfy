import styles from "./LocationSearch.module.scss";
import LocationSearchDropdown from "./LocationSearchDropdown/LocationSearchDropdown";

const LocationSearch = function ({
  value,
  isTyping,
  onChange,
  onBlur,
  onFocus,
  className,
}) {
  const { locationSearch } = styles;
  return (
    <div className={`${locationSearch} ${className}`}>
      <label htmlFor="place">Where</label>
      <input
        id="place"
        placeholder="Search for places"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {value !== "" && isTyping && <LocationSearchDropdown />}
    </div>
  );
};

export default LocationSearch;
