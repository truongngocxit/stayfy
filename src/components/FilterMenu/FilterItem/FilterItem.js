import styles from "./FilterItem.module.scss";
import SkeletonFilterSvg from "../SkeletonFilterSlider/SkeletonFilterSvg/SkeletonFilterSvg";

import { forwardRef, useState } from "react";

const FilterItem = forwardRef(function (
  { text, svgUrl, isSelected, onClick },
  ref
) {
  const [svgHasLoaded, setSvgHasLoaded] = useState(false);

  const handleSvgHasLoaded = function () {
    setSvgHasLoaded(true);
  };

  return (
    <button
      onClick={onClick}
      className={`${filterItem} ${isSelected ? filterItem__Selected : ""}`}
      ref={ref}
    >
      <div className={filterItem__Img}>
        {!svgHasLoaded && <SkeletonFilterSvg />}
        <img src={svgUrl} alt={text} onLoad={handleSvgHasLoaded} />
      </div>
      <span>{text}</span>
    </button>
  );
});

export default FilterItem;

const { filterItem, filterItem__Selected, filterItem__Img } = styles;
