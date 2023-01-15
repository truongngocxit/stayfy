import styles from "./FilterSlider.module.scss";
import FilterItem from "./FilterItem/FilterItem";
import { useRef, useEffect } from "react";
const FilterSlider = function ({ onHandleLeftBtn, onHandleRightBtn }) {
  const intersectionObserverRef = useRef(null);

  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const filterSliderRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: filterSliderRef.current,
      threshold: 0,
    };
    const observerCallback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.target === firstItemRef.current && entry.isIntersecting) {
          onHandleLeftBtn(false);
        } else if (
          entry.target === firstItemRef.current &&
          !entry.isIntersecting
        ) {
          onHandleLeftBtn(true);
        }

        console.log(entry.target === lastItemRef.current);

        if (entry.target === lastItemRef.current && entry.isIntersecting) {
          onHandleRightBtn(false);
        } else if (
          entry.target === lastItemRef.current &&
          !entry.isIntersecting
        ) {
          onHandleRightBtn(true);
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
  const { filterMenu__Items, filterMenu__Items__Slider } = styles;
  return (
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
  );
};

export default FilterSlider;
