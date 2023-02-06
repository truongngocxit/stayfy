import styles from "./SmallerScreenSearchBar.module.scss";
import CloseIcon from "../../../UI/SVG/CloseIcon";
import SearchIcon from "../../../UI/SVG/SearchIcon";
import LocationSearch from "./LocationSearch/LocationSearch";
import { useReducer } from "react";

const SmallerScreenSearchBar = function () {
  const [{ whereIsOn, whenIsOn, whoIsOn }, searchModalDispatch] = useReducer(
    searchModalReducer,
    searchModalInitialState
  );

  const handleActivateLocationSearch = function () {
    searchModalDispatch("WHERE_ACTIVE");
  };

  const handleActivateDateSearch = function () {
    searchModalDispatch("WHEN_ACTIVE");
  };

  const handleActivateGuestsSearch = function () {
    searchModalDispatch("WHO_ACTIVE");
  };

  const {
    searchBar,
    searchBar__Head,
    searchBar__Foot,
    searchBar__Main,
    searchBar__Field,
    searchBar__Field__Inactive,
    searchBar__Field__Label,
    searchBar__Field__Info,
    searchBar__Foot__ClearBtn,
    searchBar__Foot__SearchBtn,
  } = styles;
  return (
    <div className={searchBar}>
      <div className={searchBar__Head}>
        <CloseIcon />
        <h2>Search</h2>
      </div>
      <div className={searchBar__Main}>
        <div
          className={searchBar__Field}
          onClick={handleActivateLocationSearch}
        >
          {whereIsOn ? (
            <LocationSearch />
          ) : (
            <div className={searchBar__Field__Inactive}>
              <span className={searchBar__Field__Label}>Where</span>
              <span className={searchBar__Field__Info}>Da Lat</span>
            </div>
          )}
        </div>
        <div className={searchBar__Field} onClick={handleActivateDateSearch}>
          <div className={searchBar__Field__Inactive}>
            <span className={searchBar__Field__Label}>When</span>
            <span className={searchBar__Field__Info}>2 guests</span>
          </div>
        </div>
        <div className={searchBar__Field} onClick={handleActivateGuestsSearch}>
          <div className={searchBar__Field__Inactive}>
            <span className={searchBar__Field__Label}>Who</span>
            <span className={searchBar__Field__Info}>Jan 25 - 29</span>
          </div>
        </div>
      </div>
      <div className={searchBar__Foot}>
        <button className={searchBar__Foot__ClearBtn}>Clear all</button>
        <button className={searchBar__Foot__SearchBtn}>
          <SearchIcon />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SmallerScreenSearchBar;

const searchModalReducer = function (state, action) {
  switch (action) {
    case "WHERE_ACTIVE":
      return {
        whereIsOn: true,
        whenIsOn: false,
        whoIsOn: false,
      };
    case "WHEN_ACTIVE":
      return {
        whereIsOn: false,
        whenIsOn: true,
        whoIsOn: false,
      };
    case "WHO_ACTIVE":
      return {
        whereIsOn: false,
        whenIsOn: false,
        whoIsOn: true,
      };
    default:
      return { ...state };
  }
};

const searchModalInitialState = {
  whereIsOn: true,
  whenIsOn: false,
  whoIsOn: false,
};
