import styles from "./FilterItem.module.scss";
import { forwardRef } from "react";

const FilterItem = forwardRef(function ({ text, svgUrl }, ref) {
  const { filterItem } = styles;
  return (
    <button className={filterItem} ref={ref}>
      <img src={svgUrl} alt={text} />
      <span>{text}</span>
    </button>
  );
});

export default FilterItem;
