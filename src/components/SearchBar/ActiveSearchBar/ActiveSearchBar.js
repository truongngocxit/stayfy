import styles from "./ActiveSearchBar.module.scss";
import LocationSearch from "../LocationSearch/LocationSearch";
import DateSearch from "../DateSearch/DateSearch";
import GuestNumber from "../GuestNumber/GuestNumber";
import SearchButton from "../SearchButton/SearchButton";
import LargerScreenSearchBar from "./LargerScreenSearchBar/LargerScreenSearchBar";
import SmallerScreenSearchBar from "./SmallerScreenSearchBar/SmallerScreenSearchBar";
import { useContext } from "react";
import DateSearchContext from "../../../contexts/searchContext/DateSearchContextProvider";
import GuestNumberContext from "../../../contexts/searchContext/GuestNumberContextProvider";
import LocationSearchContext from "../../../contexts/searchContext/LocationSearchContextProvider";
import { useDispatch } from "react-redux";
import { searchQueryActions } from "../../../redux-store/searchQuerySlice";
import { useRef } from "react";

const ActiveSearchBar = function ({
  className,
  isCollapse,
  onStopSearching,
  isSmallerScreen = false,
}) {
  const reduxDispatch = useDispatch();
  const { searchQuery } = useContext(LocationSearchContext);
  const { selectedDate } = useContext(DateSearchContext);
  const {
    adultsNumContextSlice: { guestNum: adultsNum },
    childrenNumContextSlice: { guestNum: childrenNum },
    babiesNumContextSlice: { guestNum: babiesNum },
    animalsNumContextSlice: { guestNum: animalsNum },
  } = useContext(GuestNumberContext);

  const handleSearch = function () {
    reduxDispatch(searchQueryActions.setQuerySearch(searchQuery));
    reduxDispatch(searchQueryActions.setDateSearch(selectedDate));
    reduxDispatch(
      searchQueryActions.setGuestNum({
        adults: adultsNum,
        children: childrenNum,
        babies: babiesNum,
        animals: animalsNum,
      })
    );
    onStopSearching();
  };

  const locationSearchRef = useRef(null);
  const dateSearchRef = useRef(null);
  const guestNumSearchRef = useRef(null);

  const handleFocusDateSearch = function () {
    dateSearchRef.current.querySelector(".ant-picker-input").click();
  };

  const handleFocusGuestNumSearch = function () {
    guestNumSearchRef.current.click();
  };

  return (
    <>
      {!isSmallerScreen ? (
        <LargerScreenSearchBar
          guestNumSearchRef={guestNumSearchRef}
          locationSearchRef={locationSearchRef}
          dateSearchRef={dateSearchRef}
          isCollapse={isCollapse}
          className={className}
          handleFocusDateSearch={handleFocusDateSearch}
          handleFocusGuestNumSearch={handleFocusGuestNumSearch}
          handleSearch={handleSearch}
        />
      ) : (
        <SmallerScreenSearchBar />
      )}
    </>
  );
};

export default ActiveSearchBar;

/* <div
      className={`${searchBar} ${
        isSmallerScreen ? searchBar__SmallerScreen : ""
      }  ${className} ${isCollapse ? searchBar__Collapse : ""}`}
    >
      <LocationSearch
        activeClassName={searchBar__Active}
        className={searchBar__Place}
        onFinishSearch={handleFocusDateSearch}
        ref={locationSearchRef}
      />

      <DateSearch
        className={searchBar__Time}
        activeClassName={searchBar__Active}
        onFinishSearch={handleFocusGuestNumSearch}
        ref={dateSearchRef}
      />

      <GuestNumber
        className={searchBar__Guests}
        activeClassName={searchBar__Active}
        ref={guestNumSearchRef}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </div> */
