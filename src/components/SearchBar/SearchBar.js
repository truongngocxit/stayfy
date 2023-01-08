import styles from "./SearchBar.module.scss";
import ActiveSearchBar from "./ActiveSearchBar";
import InactiveSearchBar from "./InactiveSearchBar";
import { useState } from "react";

const SearchBar = function () {
  const [isSearching, setIsSearching] = useState(false);

  const handleStartSearching = function () {
    setIsSearching(true);
  };

  const { searchBar__collapsed } = styles;
  return (
    <>
      <ActiveSearchBar className={!isSearching ? searchBar__collapsed : ""} />
      <InactiveSearchBar
        className={isSearching ? searchBar__collapsed : ""}
        onClick={handleStartSearching}
      />
    </>
  );
};

export default SearchBar;
