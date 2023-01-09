import styles from "./FilterItem.module.scss";
import AllHomes from "../UI/FilterIcons/AllHomes";
import { forwardRef } from "react";

const FilterItem = forwardRef(function ({ text }, ref) {
  const { filterItem } = styles;
  return (
    <button className={filterItem} ref={ref}>
      <AllHomes />
      <span>{text}</span>
    </button>
  );
});

export default FilterItem;
