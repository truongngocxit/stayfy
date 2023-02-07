import styles from "./SmallerScreenSearchBar.module.scss";
import CloseIcon from "../../../UI/SVG/CloseIcon";
import SearchIcon from "../../../UI/SVG/SearchIcon";
import LocationSearch from "./LocationSearch/LocationSearch";
import DateSearch from "./DateSearch/DateSearch";
import GuestSearch from "./GuestSearch/GuestSearch";
import LocationSearchContext from "../../../../contexts/searchContext/LocationSearchContextProvider";
import DateSearchContext from "../../../../contexts/searchContext/DateSearchContextProvider";
import GuestNumberContext from "../../../../contexts/searchContext/GuestNumberContextProvider";
import { useSelector, useDispatch } from "react-redux";
import { searchQueryActions } from "../../../../redux-store/searchQuerySlice";
import { useReducer, useContext } from "react";

const SmallerScreenSearchBar = function ({ onCloseSearch, isCollapse }) {
  const [{ whereIsOn, whenIsOn, whoIsOn }, searchModalDispatch] = useReducer(
    searchModalReducer,
    searchModalInitialState
  );

  const reduxDispatch = useDispatch();

  const { searchQuery, resetLocationQuery } = useContext(LocationSearchContext);
  const {
    selectedDate: { start: queryStartDate, end: queryEndDate },
    handleClearDatePicker,
  } = useContext(DateSearchContext);

  const {
    query,
    date: { start: selectedStartDate, end: selectedEndDate },
    guestNum: { adults: selectedAdults, children: selectedChildren },
  } = useSelector((state) => state.search);

  const {
    resetContext: resetGuestQuery,
    adultsNumContextSlice: { guestNum: adultsNum },
    childrenNumContextSlice: { guestNum: childrenNum },
    babiesNumContextSlice: { guestNum: babiesNum },
    animalsNumContextSlice: { guestNum: animalsNum },
  } = useContext(GuestNumberContext);

  const handleActivateLocationSearch = function (event) {
    searchModalDispatch("WHERE_ACTIVE");
  };

  const handleActivateDateSearch = function (event) {
    searchModalDispatch("WHEN_ACTIVE");
  };

  const handleActivateGuestsSearch = function (event) {
    searchModalDispatch("WHO_ACTIVE");
  };

  let dateLabel = "Anytime";

  if (queryStartDate && queryEndDate) {
    dateLabel = `${new Date(queryStartDate).toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
    })} - ${new Date(queryEndDate).toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
    })}`;
  }

  if (selectedStartDate && selectedEndDate) {
    dateLabel = `${new Date(selectedStartDate).toLocaleDateString("en-gb", {
      month: "short",
      day: "2-digit",
    })} - ${new Date(selectedEndDate).toLocaleDateString("en-gb", {
      month: "short",
      day: "2-digit",
    })}`;
  }

  let guestLabel = "1 guest";

  if (selectedAdults > 0) {
    if (selectedAdults === 0) {
      guestLabel = "1 guest";
    } else {
      guestLabel = `${selectedAdults + selectedChildren} guests`;
    }
  }

  if (adultsNum > 0) {
    if (adultsNum === 0) {
      guestLabel = "1 guest";
    } else {
      guestLabel = `${adultsNum + adultsNum} guests`;
    }
  }

  const handleSubmitSearch = function () {
    reduxDispatch(searchQueryActions.setQuerySearch(searchQuery));
    reduxDispatch(
      searchQueryActions.setDateSearch({
        start: queryStartDate,
        end: queryEndDate,
      })
    );
    reduxDispatch(
      searchQueryActions.setGuestNum({
        adults: adultsNum,
        children: childrenNum,
        babies: babiesNum,
        animals: animalsNum,
      })
    );
    onCloseSearch();
  };

  const handleClearSearch = function () {
    resetLocationQuery();
    resetGuestQuery();
    handleClearDatePicker();
  };

  const {
    searchBar,
    searchBar__Collapse,
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
    <div className={`${searchBar} ${isCollapse ? searchBar__Collapse : ""}`}>
      <div className={searchBar__Head}>
        <CloseIcon onClick={onCloseSearch} />
        <h2>Search</h2>
      </div>
      <div className={searchBar__Main}>
        <div
          className={searchBar__Field}
          onClick={handleActivateLocationSearch}
        >
          {whereIsOn ? (
            <LocationSearch onFinishSearch={handleActivateDateSearch} />
          ) : (
            <div className={searchBar__Field__Inactive}>
              <span className={searchBar__Field__Label}>Where</span>
              <span className={searchBar__Field__Info}>
                {searchQuery || query || "Anywhere"}
              </span>
            </div>
          )}
        </div>
        <div className={searchBar__Field}>
          {whenIsOn ? (
            <DateSearch
              onFinishSearch={handleActivateGuestsSearch}
              isOn={whenIsOn}
            />
          ) : (
            <div
              className={searchBar__Field__Inactive}
              onClick={handleActivateDateSearch}
            >
              <span className={searchBar__Field__Label}>When</span>
              <span className={searchBar__Field__Info}>{dateLabel}</span>
            </div>
          )}
        </div>
        <div className={searchBar__Field} onClick={handleActivateGuestsSearch}>
          {whoIsOn ? (
            <GuestSearch />
          ) : (
            <div className={searchBar__Field__Inactive}>
              <span className={searchBar__Field__Label}>Who</span>
              <span className={searchBar__Field__Info}>{guestLabel}</span>
            </div>
          )}
        </div>
      </div>
      <div className={searchBar__Foot}>
        <button
          className={searchBar__Foot__ClearBtn}
          onClick={handleClearSearch}
        >
          Clear all
        </button>
        <button
          className={searchBar__Foot__SearchBtn}
          onClick={handleSubmitSearch}
        >
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
