import styles from "./FilterMenu.module.scss";
import AllHomes from "../UI/FilterIcons/AllHomes";
import FilterIcon from "../UI/SVG/FilterIcon";
import ChevronLeftIcon from "../UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../UI/SVG/ChevronRightIcon";
import { useEffect, useRef, forwardRef } from "react";

const FilterMenu = function () {
  const intersectionObserverRef = useRef(null);
  const itemsSliderRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);

  useEffect(() => {
    if (!intersectionObserverRef) {
      const options = {
        root: itemsSliderRef.current,
        threshold: 0,
      };
      const handleFirstAndLastItemsVisible = function (entries, callback) {};
      intersectionObserverRef.current = new IntersectionObserver(
        handleFirstAndLastItemsVisible,
        options
      );
    }
  });

  const {
    filterMenu,
    filterMenu__Btn,
    filterMenu__Items,
    filterMenu__Items__Slider,
    filterMenu__Items__Btn,
    filterMenu__Items__Btn_Left,
    filterMenu__Items__Btn_Right,
    filterMenu__Container,
  } = styles;
  return (
    <div className={filterMenu}>
      <div className={filterMenu__Container}>
        <button
          className={`${filterMenu__Items__Btn} ${filterMenu__Items__Btn_Left}`}
        >
          <ChevronLeftIcon />
        </button>
        <button
          className={`${filterMenu__Items__Btn} ${filterMenu__Items__Btn_Right}`}
        >
          <ChevronRightIcon />
        </button>
        <div className={filterMenu__Items}>
          <div className={filterMenu__Items__Slider} ref={itemsSliderRef}>
            {new Array(25).fill(0).map((item, index, array) => (
              <MenuItem
                key={index}
                ref={(node) => {
                  if (index === 0) {
                    firstItemRef.current = node;
                    console.log(node);
                  } else if (index === array.length - 1) {
                    lastItemRef.current = node;
                    console.log(node);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={filterMenu__Btn}>
        <FilterButton />
      </div>
    </div>
  );
};

export default FilterMenu;

const MenuItem = forwardRef(function (props, ref) {
  const { filterItem } = styles;
  return (
    <button className={filterItem} ref={ref}>
      <AllHomes />
      <span>All</span>
    </button>
  );
});

const FilterButton = function () {
  const { filterBtn } = styles;
  return (
    <button className={filterBtn}>
      <FilterIcon />
      <span>Filter</span>
    </button>
  );
};

const handleSliderToRight = function () {
  // const sliderWidth = filterSliderRef.current.getBoundingClientRect().width;
  // slideDistanceRef.current.right += sliderWidth;
  // slideDistanceRef.current.left -= sliderWidth;
  // filterSliderRef.current.style.transform = `translateX(-${slideDistanceRef.current.right}px)`;
};

const handleSliderToLeft = function () {
  // const sliderWidth = filterSliderRef.current.getBoundingClientRect().width;
  // slideDistanceRef.current.left += sliderWidth;
  // slideDistanceRef.current.right -= sliderWidth;
  // filterSliderRef.current.style.transform = `translateX(${slideDistanceRef.current.left}px)`;
};
