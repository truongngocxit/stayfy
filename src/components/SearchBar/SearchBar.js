import styles from "./SearchBar.module.scss";
import ActiveSearchBar from "./ActiveSearchBar/ActiveSearchBar";
import InactiveSearchBar from "./InactiveSearchBar/InactiveSearchBar";
import { useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "../UI/Overlay/Overlay";

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
    <>
      <div className={searchBar}>
        <InactiveSearchBar
          onStartSearching={handleStartSearching}
          isCollapse={isSearching}
        />
        <ActiveSearchBar
          onStopSearching={handleStopSearching}
          isCollapse={!isSearching}
        />
      </div>
      {isSearching &&
        createPortal(
          <Overlay onClick={handleStopSearching} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default SearchBar;
