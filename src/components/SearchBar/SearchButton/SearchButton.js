import styles from "./SearchButton.module.scss";
import SearchIcon from "../../UI/SVG/SearchIcon";

const SearchButton = function ({ className, onClick, children }) {
  const { searchBtn } = styles;
  return (
    <button className={searchBtn} onClick={onClick}>
      <SearchIcon />
      <span>{children}</span>
    </button>
  );
};

export default SearchButton;
