import styles from "./FilterButton.module.scss";
import FilterIcon from "../UI/SVG/FilterIcon";

const FilterButton = function () {
  const { filterBtn } = styles;
  return (
    <button className={filterBtn}>
      <FilterIcon />
      <span>Filter</span>
    </button>
  );
};

export default FilterButton;
