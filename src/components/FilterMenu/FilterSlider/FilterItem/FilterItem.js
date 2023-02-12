import styles from "./FilterItem.module.scss";
import { forwardRef } from "react";
import { useState } from "react";
import SkeletonFilterSvg from "../../SkeletonFilterSlider/SkeletonFilterSvg/SkeletonFilterSvg";

const FilterItem = forwardRef(function (
  { text, svgUrl, isSelected, onClick },
  ref
) {
  const [iconImgHasLoaded, setIconImgHasLoaded] = useState(false);

  const handleImageHasLoad = function () {
    setIconImgHasLoaded(true);
  };

  const { filterItem, filterItem__Selected } = styles;
  return (
    <button
      onClick={onClick}
      className={`${filterItem} ${isSelected ? filterItem__Selected : ""}`}
      ref={ref}
    >
      <img src={svgUrl} alt={text} onLoad={handleImageHasLoad} />

      <span>{text}</span>
    </button>
  );
});

export default FilterItem;
