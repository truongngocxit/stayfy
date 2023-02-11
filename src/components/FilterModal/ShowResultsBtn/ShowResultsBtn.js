import styles from "./ShowResultsBtn.module.scss";
import { useContext } from "react";
import facilitiesFilterContext from "../../../contexts/filterModalContext/facilitiesFilterContextProvider";
import priceRangeContext from "../../../contexts/filterModalContext/priceRangeContextProvider";
import typesFilterContext from "../../../contexts/filterModalContext/typesFilterContextProvider";
import { useDispatch } from "react-redux";
import { searchQueryActions } from "../../../redux-store/searchQuerySlice";

const ShowResultsBtn = function ({ className, onCloseModal }) {
  const { facilitiesSelect } = useContext(facilitiesFilterContext);
  const { priceRange } = useContext(priceRangeContext);
  const { typeFilters } = useContext(typesFilterContext);
  const reduxDispatch = useDispatch();

  const handleApplyFilters = function () {
    reduxDispatch(
      searchQueryActions.changeFilters({
        typesOfStay: typeFilters,
        priceRange,
        facilities: facilitiesSelect,
      })
    );
    onCloseModal();
  };

  const { showBtn } = styles;
  return (
    <button
      type="button"
      onClick={handleApplyFilters}
      className={`${showBtn} ${className}`}
    >
      Show results
    </button>
  );
};

export default ShowResultsBtn;
