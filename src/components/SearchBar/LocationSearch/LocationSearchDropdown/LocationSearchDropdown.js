import styles from "./LocationSearchDropdown.module.scss";
import SearchSuggestion from "./SearchSuggestion/SearchSuggestion";
import NoLocationFound from "./NoLocationFound/NoLocationFound";
import { useState, useEffect, forwardRef } from "react";

const LocationSearchDropdown = function (
  { locations, setQuery, onCloseDropdown, onFinishSearch, isAbsolute = true },
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
        onCloseDropdown();
        onFinishSearch();
      }
    };

    document.addEventListener("keydown", handleArrowUpAndDown);

    return () => document.removeEventListener("keydown", handleArrowUpAndDown);
  }, [activeIndex, setQuery, locations, onCloseDropdown, onFinishSearch]);

  const handleClickSuggestion = function (_, name) {
    setQuery(name);
    onCloseDropdown();
    onFinishSearch();
  };

  const { searchDropdown, searchDropdown__Absolute, searchDropdown__Static } =
    styles;
  return (
    <ul
      className={`${searchDropdown} ${
        isAbsolute ? searchDropdown__Absolute : searchDropdown__Static
      }`}
      ref={ref}
    >
      {locations.length > 0 ? (
        locations.map((loc, i) => (
          <SearchSuggestion
            // onClick={handleClickSuggestion.bind(null, null, loc.name)}
            onClick={(event) => {
              event.stopPropagation();
              setQuery(loc.name);
              onCloseDropdown();
              onFinishSearch();
            }}
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
