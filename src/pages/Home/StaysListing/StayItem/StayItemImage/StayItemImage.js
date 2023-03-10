import styles from "./StayItemImage.module.scss";
import HeartIcon from "../../../../../components/UI/SVG/HeartIcon";
import ChevronLeftIcon from "../../../../../components/UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../../../../../components/UI/SVG/ChevronRightIcon";
import StayItemImageSkeleton from "./StateItemImageSkeleton/StayItemImageSkeleton";
import { useState, useRef, useEffect } from "react";

const StayItemImage = function ({ className, imgs }) {
  const [btnsIsHovered, setBtnsIsHovered] = useState(false);
  const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
  const [rightBtnIsVisible, setRightBtnIsVisible] = useState(false);
  const [firstImageHasLoaded, setFirstImageHasLoaded] = useState(false);
  const firstImageRef = useRef(null);
  const lastImageRef = useRef(null);

  const intersectionObserverRef = useRef(null);
  const imagesContainerRef = useRef(null);

  //const [imgElementLoadCount, setImgElementLoadCount] = useState(0);
  const handleHoverImg = function () {
    setBtnsIsHovered(true);
  };

  const handleBlurImg = function () {
    setBtnsIsHovered(false);
  };

  const handleClickNextImage = function (event) {
    //event.stopPropagation();
    event.preventDefault();
    imagesContainerRef.current.scrollBy({
      left: imagesContainerRef.current.getBoundingClientRect().width,
      behavior: "smooth",
    });
  };

  const handleClickPreviousImage = function (event) {
    //event.stopPropagation();
    event.preventDefault();
    imagesContainerRef.current.scrollBy({
      left: -imagesContainerRef.current.getBoundingClientRect().width,
      behavior: "smooth",
    });
  };

  const handleAddImageLoadCount = function (event) {
    if (
      event.target === imagesContainerRef.current.querySelectorAll("img")[0]
    ) {
      setFirstImageHasLoaded(true);
    }
  };

  useEffect(() => {
    const observerCallback = function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target === firstImageRef.current) {
          setLeftBtnIsVisible(false);
        } else if (!e.isIntersecting && e.target === firstImageRef.current) {
          setLeftBtnIsVisible(true);
        }

        if (e.isIntersecting && e.target === lastImageRef.current) {
          setRightBtnIsVisible(false);
        } else if (!e.isIntersecting && e.target === lastImageRef.current) {
          setRightBtnIsVisible(true);
        }
      });
    };

    const observerOptions = {
      root: imagesContainerRef.current,
      threshold: 1,
    };

    intersectionObserverRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (firstImageRef.current && lastImageRef.current) {
      intersectionObserverRef.current.observe(firstImageRef.current);
      intersectionObserverRef.current.observe(lastImageRef.current);
    }

    return () => intersectionObserverRef.current.disconnect();
  }, []);

  return (
    <div
      className={`${itemImage} ${className || ""}`}
      onMouseEnter={handleHoverImg}
      onMouseLeave={handleBlurImg}
    >
      {<StayItemImageSkeleton isLoading={!firstImageHasLoaded} />}
      {/* <button className={itemImage__LikeBtn}>
        <HeartIcon />
      </button> */}

      <div className={itemImage__OuterContainer} ref={imagesContainerRef}>
        <div
          className={itemImage__InnerContainer}
          style={{
            width: `${imgs.length * 100}%`,
            gridTemplateColumns: `repeat(${imgs.length}, 1fr)`,
          }}
        >
          {imgs.map((img, index, array) => (
            <div
              key={img}
              className={itemImage__Image}
              ref={(node) => {
                if (index === 0) {
                  firstImageRef.current = node;
                }
                if (index === array.length - 1) {
                  lastImageRef.current = node;
                }
              }}
            >
              <img
                src={img}
                alt={`Preview no.${index}`}
                onLoad={handleAddImageLoadCount}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${itemImage__SlideBtnLeft} ${
          leftBtnIsVisible ? "" : itemImage__SlideBtnHidden
        }`}
        onClick={handleClickPreviousImage}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className={`${itemImage__SlideBtnRight} ${
          rightBtnIsVisible ? "" : itemImage__SlideBtnHidden
        }`}
        onClick={handleClickNextImage}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default StayItemImage;

const {
  itemImage,
  itemImage__OuterContainer,
  itemImage__InnerContainer,
  itemImage__Image,
  itemImage__LikeBtn,
  ["itemImage__SlideBtn--Hidden"]: itemImage__SlideBtnHidden,
  itemImage__SlideBtnLeft,
  itemImage__SlideBtnRight,
} = styles;
