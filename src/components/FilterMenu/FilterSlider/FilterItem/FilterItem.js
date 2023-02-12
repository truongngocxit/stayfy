import styles from "./FilterItem.module.scss";
import { forwardRef } from "react";

const FilterItem = forwardRef(function (
  { text, svgUrl, isSelected, onClick },
  ref
) {
  const { filterItem, filterItem__Selected } = styles;
  return (
    <button
      onClick={onClick}
      className={`${filterItem} ${isSelected ? filterItem__Selected : ""}`}
      ref={ref}
    >
      <img src={svgUrl} alt={text} />

      <span>{text}</span>
    </button>
  );
});

export default FilterItem;
