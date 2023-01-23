import styles from "./StayItemImage.module.scss";
import HeartIcon from "../../../UI/SVG/HeartIcon";
import ChevronLeftIcon from "../../../UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../../../UI/SVG/ChevronRightIcon";
import { useState, useRef, useEffect } from "react";

const StayItemImage = function ({ className, imgs }) {
  const [btnsIsHovered, setBtnsIsHovered] = useState(false);
  const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
  const [rightBtnIsVisible, setRightBtnIsVisible] = useState(false);

  const firstImageRef = useRef(null);
  const lastImageRef = useRef(null);

  const intersectionObserverRef = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imagesContainerRef = useRef(null);
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

    intersectionObserverRef.current.observe(firstImageRef.current);
    intersectionObserverRef.current.observe(lastImageRef.current);

    return () => intersectionObserverRef.current.disconnect();
  }, []);

  const {
    itemImage,
    itemImage__OuterContainer,
    itemImage__InnerContainer,
    itemImage__Image,
    itemImage__LikeBtn,
    itemImage__HiddenBtn,
    itemImage__LeftBtn,
    itemImage__RightBtn,
  } = styles;
  return (
    <div
      className={`${itemImage} ${className || ""}`}
      onMouseEnter={handleHoverImg}
      onMouseLeave={handleBlurImg}
    >
      <button className={itemImage__LikeBtn}>
        <HeartIcon />
      </button>

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
              <img src={img} alt="dummy" />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${itemImage__LeftBtn} ${
          btnsIsHovered && leftBtnIsVisible ? "" : itemImage__HiddenBtn
        }`}
        onClick={handleClickPreviousImage}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className={`${itemImage__RightBtn} ${
          btnsIsHovered && rightBtnIsVisible ? "" : itemImage__HiddenBtn
        }`}
        onClick={handleClickNextImage}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default StayItemImage;
