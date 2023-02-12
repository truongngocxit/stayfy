import styles from "./InactiveSearchBar.module.scss";
import { useSelector } from "react-redux";
import LargeScreenSearchBar from "./LargerScreenSearchBar/LargerScreenSearchBar";
import SmallerScreenSearchBar from "./SmallerScreenSearchBar/SmallerScreenSearchBar";

const InactiveSearchBar = function ({
  className,
  onStartSearching,
  isCollapse,
  isTabletScreen,
}) {
  const query = useSelector((state) => state.search.query) || null;
  const date = useSelector((state) => state.search.date) || null;
  const guests = useSelector((state) => state.search.guestNum) || null;

  let dateString = "Anytime";

  if (date?.start && date?.end) {
    dateString = `${new Date(date.start).toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
    })} - ${new Date(date.end).toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
    })}`;
  }

  return (
    <>
      {!isTabletScreen ? (
        <LargeScreenSearchBar
          className={`${searchBar}  ${
            isCollapse ? searchBarCollapse : ""
          } ${className}`}
          onClick={onStartSearching}
          query={query}
          dateString={dateString}
          guests={guests}
        />
      ) : (
        <SmallerScreenSearchBar
          className={`${searchBar}  ${
            isCollapse ? searchBarCollapse : ""
          } ${className}`}
          onClick={onStartSearching}
          query={query}
          dateString={dateString}
          guests={guests}
        />
      )}
    </>
  );
};

export default InactiveSearchBar;

const { searchBar, ["searchBar--Collapse"]: searchBarCollapse } = styles;
