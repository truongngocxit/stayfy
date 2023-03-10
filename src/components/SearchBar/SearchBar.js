import styles from "./SearchBar.module.scss";
import ActiveSearchBar from "./ActiveSearchBar/ActiveSearchBar";
import InactiveSearchBar from "./InactiveSearchBar/InactiveSearchBar";
import { useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "../UI/Overlay/Overlay";
import SearchContextProvider from "../../contexts/searchContext/SearchContextProvider";

const SearchBar = function ({ isTabletScreen }) {
  const [isSearching, setIsSearching] = useState(false);

  const handleStartSearching = function (event) {
    setIsSearching(true);
  };

  const handleStopSearching = function () {
    setIsSearching(false);
  };

  const { searchBar } = styles;
  return (
    <SearchContextProvider>
      <div className={searchBar}>
        <InactiveSearchBar
          onStartSearching={handleStartSearching}
          isCollapse={isSearching}
          isTabletScreen={isTabletScreen}
        />
        <ActiveSearchBar
          onStopSearching={handleStopSearching}
          isCollapse={!isSearching}
          isTabletScreen={isTabletScreen}
        />
      </div>
      {isSearching &&
        createPortal(
          <Overlay onClick={handleStopSearching} />,
          document.getElementById("overlay-root")
        )}
    </SearchContextProvider>
  );
};

export default SearchBar;
