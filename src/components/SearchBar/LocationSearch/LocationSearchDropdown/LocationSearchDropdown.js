import styles from "./LocationSearchDropdown.module.scss";
import SearchSuggestion from "./SearchSuggestion/SearchSuggestion";
import NoLocationFound from "./NoLocationFound/NoLocationFound";
import { useState, useEffect, forwardRef } from "react";

const LocationSearchDropdown = function (
  { locations, setQuery, onCloseDropdown },
  ref
) {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    const handleArrowUpAndDown = function (event) {
      if (event.key === "ArrowDown") {
        if (activeIndex === null) {
          setActiveIndex(0);
        } else if (activeIndex === locations.length - 1) {
          setActiveIndex(null);
        } else {
          setActiveIndex((i) => i + 1);
        }
      }

      if (event.key === "ArrowUp") {
        if (activeIndex === null) {
          setActiveIndex(locations.length - 1);
        } else if (activeIndex === 0) {
          setActiveIndex(null);
        } else {
          setActiveIndex((i) => i - 1);
        }
      }

      if (event.key === "Enter") {
        setQuery(locations[activeIndex].name);
      }
    };

    document.addEventListener("keydown", handleArrowUpAndDown);

    return () => document.removeEventListener("keydown", handleArrowUpAndDown);
  }, [activeIndex, setQuery, locations]);

  const handleClickSuggestion = function (_, name) {
    setQuery(name);
    onCloseDropdown();
  };

  const { searchDropdown } = styles;
  return (
    <ul className={searchDropdown} ref={ref}>
      {locations.length > 0 ? (
        locations.map((loc, i) => (
          <SearchSuggestion
            onClick={handleClickSuggestion.bind(null, null, loc.name)}
            key={loc.id}
            search={loc.name}
            isActive={i === activeIndex}
          />
        ))
      ) : (
        <NoLocationFound />
      )}
    </ul>
  );
};

export default forwardRef(LocationSearchDropdown);
