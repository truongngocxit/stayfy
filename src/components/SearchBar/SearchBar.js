import styles from "./SearchBar.module.scss";
import ActiveSearchBar from "./ActiveSearchBar/ActiveSearchBar";
import InactiveSearchBar from "./InactiveSearchBar/InactiveSearchBar";
import { useState } from "react";

const SearchBar = function () {
  const [isSearching, setIsSearching] = useState(false);

  const handleStartSearching = function () {
    setIsSearching(true);
  };

  const handleStopSearching = function () {
    setIsSearching(false);
  };

  const { searchBar } = styles;
  return (
    <div className={searchBar}>
      {isSearching ? (
        <ActiveSearchBar onStopSearching={handleStopSearching} />
      ) : (
        <InactiveSearchBar onStartSearching={handleStartSearching} />
      )}
    </div>
  );
};

export default SearchBar;
