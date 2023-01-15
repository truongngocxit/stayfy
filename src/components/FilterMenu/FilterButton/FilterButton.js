import styles from "./FilterButton.module.scss";
import FilterIcon from "../../UI/SVG/FilterIcon";

const FilterButton = function ({ onClick }) {
  const { filterBtn } = styles;
  return (
    <button className={filterBtn} onClick={onClick}>
      <FilterIcon />
      <span>Filter</span>
    </button>
  );
};

export default FilterButton;
