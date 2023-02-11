import styles from "./ClearFilterButton.module.scss";
import { useContext } from "react";
import typesFilterContext from "../../../contexts/filterModalContext/typesFilterContextProvider";
import priceRangeContext from "../../../contexts/filterModalContext/priceRangeContextProvider";
import facilitiesFilterContext from "../../../contexts/filterModalContext/facilitiesFilterContextProvider";

const ClearFilterButton = function ({ className }) {
  const { handleResetTypesFilter } = useContext(typesFilterContext);
  const { handleResetPriceRange } = useContext(priceRangeContext);
  const { handleResetFacilitiesSelect } = useContext(facilitiesFilterContext);

  const handleResetFilters = function () {
    handleResetFacilitiesSelect();
    handleResetPriceRange();
    handleResetTypesFilter();
  };

  const { clearBtn } = styles;
  return (
    <button
      onClick={handleResetFilters}
      type="button"
      className={`${clearBtn} ${className}`}
    >
      Clear all filters
    </button>
  );
};

export default ClearFilterButton;
