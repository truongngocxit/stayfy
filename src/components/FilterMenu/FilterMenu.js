import styles from "./FilterMenu.module.scss";
import ChevronLeftIcon from "../UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../UI/SVG/ChevronRightIcon";
import FilterItem from "./FilterItem";
import FilterButton from "./FilterButton";
import { useRef, useEffect, useState } from "react";
import useFetchData from "../../custom-hooks/useFetchData";

const FilterMenu = function () {
  const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
  const [rightBtnIsVisible, setRightBtnIsVisible] = useState(false);

  const intersectionObserverRef = useRef(null);

  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const filterSliderRef = useRef(null);

  const {
    data: filterItems,
    isLoading,
    error,
  } = useFetchData(
    "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/filters.json"
  );
  console.log(filterItems);

  useEffect(() => {
    const observerOptions = {
      root: filterSliderRef.current,
      threshold: 0,
    };
    const observerCallback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.target === firstItemRef.current && entry.isIntersecting) {
          setLeftBtnIsVisible(false);
        } else if (
          entry.target === firstItemRef.current &&
          !entry.isIntersecting
        ) {
          setLeftBtnIsVisible(true);
        }

        console.log(entry.target === lastItemRef.current);

        if (entry.target === lastItemRef.current && entry.isIntersecting) {
          setRightBtnIsVisible(false);
        } else if (
          entry.target === lastItemRef.current &&
          !entry.isIntersecting
        ) {
          setRightBtnIsVisible(true);
        }
      });
    };
    console.log(firstItemRef.current && lastItemRef.current);
    if (filterItems.length > 0) {
      console.log("observe");
      intersectionObserverRef.current = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      intersectionObserverRef.current.observe(firstItemRef.current);
      intersectionObserverRef.current.observe(lastItemRef.current);
    }
  }, [filterItems]);

  const handleClickLeft = function () {
    filterSliderRef.current.scrollBy({
      left: -filterSliderRef.current.getBoundingClientRect().width / 2,
      behavior: "smooth",
    });
  };

  const handleClickRight = function () {
    filterSliderRef.current.scrollBy({
      left: filterSliderRef.current.getBoundingClientRect().width / 2,
      behavior: "smooth",
    });
  };

  const {
    filterMenu,
    filterMenu__FilterBtn,
    filterMenu__Items,
    filterMenu__Items__Slider,
    filterMenu__Btn,
    filterMenu__Btn_Hidden,
    filterMenu__Btn_Left,
    filterMenu__Btn_Right,
    filterMenu__Container,
  } = styles;
  return (
    <div className={filterMenu}>
      <div className={filterMenu__Container}>
        <div className={filterMenu__Items} ref={filterSliderRef}>
          {filterItems.length > 0 && (
            <div className={filterMenu__Items__Slider}>
              {filterItems.map((item, index, array) => (
                <FilterItem
                  text={item.name}
                  key={item.id}
                  svgUrl={item.url}
                  ref={(node) => {
                    if (index === 0) {
                      firstItemRef.current = node;
                    }
                    if (index === array.length - 1) {
                      lastItemRef.current = node;
                    }
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleClickLeft}
          className={`${filterMenu__Btn} ${filterMenu__Btn_Left} ${
            !leftBtnIsVisible ? filterMenu__Btn_Hidden : ""
          }`}
        >
          <ChevronLeftIcon />
        </button>

        <button
          className={`${filterMenu__Btn} ${filterMenu__Btn_Right} ${
            !rightBtnIsVisible ? filterMenu__Btn_Hidden : ""
          }`}
          onClick={handleClickRight}
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className={filterMenu__FilterBtn}>
        <FilterButton />
      </div>
    </div>
  );
};

export default FilterMenu;

// const handleClickRight = function () {
//   const numberOfItemsOnViewport =
//     filterItemsArrayRef.current.length /
//     (filterSliderRef.current.scrollWidth /
//       observerRootRef.current.getBoundingClientRect().width);

//   if (
//     currentScrollPositionRef.current + numberOfItemsOnViewport - (5 + 1) >=
//     filterItemsArrayRef.current.length - 1
//   ) {
//     console.log("Exceedd");
//     filterItemsArrayRef.current[
//       filterItemsArrayRef.current.length - 1
//     ].scrollIntoView({ behavior: "smooth" });
//   } else {
//     console.log("Still in");
//     if (
//       filterItemsArrayRef.current[
//         currentScrollPositionRef.current +
//           numberOfItemsOnViewport * 2 -
//           (5 + 1) !==
//           undefined
//       ]
//     ) {
//       filterItemsArrayRef.current[
//         currentScrollPositionRef.current +
//           numberOfItemsOnViewport * 2 -
//           (5 + 1)
//       ].scrollIntoView({ behavior: "smooth" });
//     } else {
//       filterItemsArrayRef.current[
//         currentScrollPositionRef.current + numberOfItemsOnViewport - (5 + 1)
//       ].scrollIntoView({ behavior: "smooth" });
//     }
//   }
// };
