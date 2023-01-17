import styles from "./ActiveSearchBar.module.scss";
import LocationSearch from "../LocationSearch/LocationSearch";
import DateSearch from "../DateSearch/DateSearch";
import GuestNumber from "../GuestNumber/GuestNumber";
import SearchButton from "../SearchButton/SearchButton";
import { useContext } from "react";
import DateSearchContext from "../../searchContext/DateSearchContextProvider";
import GuestNumberContext from "../../searchContext/GuestNumberContextProvider";
import LocationSearchContext from "../../searchContext/LocationSearchContextProvider";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../redux-store/searchSlice";

const SearchBar = function ({ className, isCollapse }) {
  const reduxDispatch = useDispatch();
  const { searchQuery } = useContext(LocationSearchContext);
  const { selectedDate } = useContext(DateSearchContext);
  const {
    adultsNumContextSlice: { guestNum: adultsNum },
    childrenNumContextSlice: { guestNum: childrenNum },
    babiesNumContextSlice: { guestNum: babiesNum },
    animalsNumContextSlice: { guestNum: animalsNum },
  } = useContext(GuestNumberContext);

  const handleSearch = function (event) {
    event.preventDefault();
    reduxDispatch(searchActions.setQuerySearch(searchQuery));
    reduxDispatch(searchActions.setDateSearch(selectedDate));
    reduxDispatch(
      searchActions.setGuestNum({
        adults: adultsNum,
        children: childrenNum,
        babies: babiesNum,
        animals: animalsNum,
      })
    );
  };

  const {
    searchBar,
    searchBar__Collapse,
    searchBar__Place,
    searchBar__Active,
    searchBar__Time,
    searchBar__Guests,
  } = styles;

  return (
    <>
      <form
        onSubmit={handleSearch}
        className={`${searchBar}  ${className} ${
          isCollapse ? searchBar__Collapse : ""
        }`}
      >
        <LocationSearch
          activeClassName={searchBar__Active}
          className={searchBar__Place}
        />

        <DateSearch
          className={searchBar__Time}
          activeClassName={searchBar__Active}
        />

        <GuestNumber
          className={searchBar__Guests}
          activeClassName={searchBar__Active}
        />
        <SearchButton type="submit">Search</SearchButton>
      </form>
    </>
  );
};

export default SearchBar;
