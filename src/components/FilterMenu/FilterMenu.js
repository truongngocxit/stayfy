import styles from "./FilterMenu.module.scss";
import ChevronLeftIcon from "../UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../UI/SVG/ChevronRightIcon";
import FilterItem from "./FilterSlider/FilterItem/FilterItem";
import FilterButton from "./FilterButton/FilterButton";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useFetchData from "../../custom-hooks/useFetchData";
import SkeletonFilterSlider from "./SkeletonFilterSlider/SkeletonFilterSlider";
import FilterModal from "../FilterModal/FilterModal";
import { useDispatch, useSelector } from "react-redux";
import { searchQueryActions } from "../../redux-store/searchQuerySlice";
import FilterModalContextProvider from "../../contexts/filterModalContext/filterModalContextProvider";
import ModalTransition from "../ModalTransition/ModalTransition";
import axios from "axios";

const FilterMenu = function () {
  const featureFilter = useSelector((state) => state.filter.feature);
  const reduxDispatch = useDispatch();
  const [filterModalIsVisible, setFilterModalIsVisible] = useState(false);
  const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
  const [rightBtnIsVisible, setRightBtnIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(featureFilter);
  const sliderIntersectionObserverRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const filterSliderRef = useRef(null);

  const {
    data: filterItems,
    isLoading,
    error,
  } = useFetchData("https://stayfy-backend.onrender.com/all-docs/filters");

  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await axios({
        method: "GET",
        url: "https://stayfy-backend.onrender.com/query-lodge",
        params: {
          orderBy: "price.avg",
          descending: true,
          limit: 1,
        },
      });

      console.log(response.data);

      setMaxPrice(
        Number(Object.entries(response.data)[0][1].price.max.toFixed(2))
      );
    })();
  }, []);

  useEffect(() => {
    let unobserve = false;
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

    sliderIntersectionObserverRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (firstItemRef.current && lastItemRef.current) {
      sliderIntersectionObserverRef.current.observe(firstItemRef.current);
      sliderIntersectionObserverRef.current.observe(lastItemRef.current);
    }

    if (unobserve) {
      sliderIntersectionObserverRef.current.disconnect();
    }
    return () => {
      unobserve = true;
    };
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

  const handleOpenFilterModal = function () {
    setFilterModalIsVisible(true);
  };

  const handleCloseFilterModal = function () {
    setFilterModalIsVisible(false);
  };

  const handleChangeSelectedFilter = function (tag) {
    setSelectedFilter(tag);
    reduxDispatch(searchQueryActions.changeFeature(tag));
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

  let filterSliderContent;

  const sortedFilterItems = [
    ...filterItems.filter((i) => i.tag === "isAllStays"),
    ...filterItems.filter((i) => i.tag !== "isAllStays"),
  ];

  if (isLoading || filterItems.length === 0) {
    filterSliderContent = isLoading && <SkeletonFilterSlider />;
  } else if (!isLoading && filterItems.length > 0) {
    filterSliderContent = (
      <div className={filterMenu__Container}>
        <div className={filterMenu__Items} ref={filterSliderRef}>
          <div className={filterMenu__Items__Slider}>
            {sortedFilterItems.map((item, index, array) => (
              <FilterItem
                onClick={handleChangeSelectedFilter.bind(null, item.tag)}
                isSelected={item.tag === selectedFilter}
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
    );
  }

  return (
    <div className={filterMenu}>
      {filterSliderContent}

      <div className={filterMenu__FilterBtn}>
        <FilterButton onClick={handleOpenFilterModal} />

        {createPortal(
          <FilterModal
            onClick={handleCloseFilterModal}
            isVisible={filterModalIsVisible}
            maxPrice={maxPrice}
          />,
          document.getElementById("modal-root")
        )}
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
