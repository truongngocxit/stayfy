import styles from "./FilterButton.module.scss";
import FilterIcon from "../../UI/SVG/FilterIcon";

const FilterButton = function ({ onClick, hasText = true }) {
  const { filterBtn, filterBtn__NoText } = styles;
  return (
    <button
      className={`${filterBtn} ${!hasText ? filterBtn__NoText : ""}`}
      onClick={onClick}
    >
      <FilterIcon />
      {hasText && <span>Filter</span>}
    </button>
  );
};

export default FilterButton;
