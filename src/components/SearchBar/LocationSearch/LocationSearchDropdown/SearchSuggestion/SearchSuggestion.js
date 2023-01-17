import styles from "./SearchSuggestion.module.scss";
import LocationIcon from "../../../../UI/SVG/LocationIcon";
import { forwardRef } from "react";

const SearchSuggestion = forwardRef(function (
  { search, isActive, onClick },
  ref
) {
  const { searchSuggestion, searchSuggestion__Active } = styles;
  return (
    <li
      onClick={onClick}
      ref={ref}
      className={`${searchSuggestion} ${
        isActive ? searchSuggestion__Active : ""
      }`}
    >
      <LocationIcon />
      <span>{search}</span>
    </li>
  );
});

export default SearchSuggestion;
