import styles from "./FilterMenu.module.scss";
import ChevronLeftIcon from "../UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../UI/SVG/ChevronRightIcon";
import FilterItem from "./FilterItem";
import FilterButton from "./FilterButton";
import { useRef, useEffect, useState } from "react";

const FilterMenu = function () {
  const intersectionObserverRef = useRef(null);

  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const filterSliderRef = useRef(null);

  const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
  const [rightBtnIsVisible, setRightBtnIsVisible] = useState(false);

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
          console.log("Hide Right BTN");
          setRightBtnIsVisible(false);
        } else if (
          entry.target === lastItemRef.current &&
          !entry.isIntersecting
        ) {
          console.log("SHow Right BTN");
          setRightBtnIsVisible(true);
        }
      });
    };

    intersectionObserverRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    intersectionObserverRef.current.observe(firstItemRef.current);
    intersectionObserverRef.current.observe(lastItemRef.current);
  }, []);

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
    filterMenu__Btn,
    filterMenu__Items,
    filterMenu__Items__Slider,
    filterMenu__Items__Btn,
    filterMenu__Items__Btn_Hidden,
    filterMenu__Items__Btn_Left,
    filterMenu__Items__Btn_Right,
    filterMenu__Container,
  } = styles;
  return (
    <div className={filterMenu}>
      <div className={filterMenu__Container}>
        <div className={filterMenu__Items} ref={filterSliderRef}>
          <div className={filterMenu__Items__Slider}>
            {new Array(25).fill(0).map((item, index, array) => (
              <FilterItem
                text={index + 1}
                key={index}
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
        </div>

        <button
          onClick={handleClickLeft}
          className={`${filterMenu__Items__Btn} ${filterMenu__Items__Btn_Left} ${
            !leftBtnIsVisible ? filterMenu__Items__Btn_Hidden : ""
          }`}
        >
          <ChevronLeftIcon />
        </button>

        <button
          className={`${filterMenu__Items__Btn} ${filterMenu__Items__Btn_Right} ${
            !rightBtnIsVisible ? filterMenu__Items__Btn_Hidden : ""
          }`}
          onClick={handleClickRight}
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className={filterMenu__Btn}>
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
