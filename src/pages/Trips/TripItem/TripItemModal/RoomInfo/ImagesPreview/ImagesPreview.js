import styles from "./ImagesPreview.module.scss";
import ChevronLeftIcon from "../../../../../../components/UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../../../../../../components/UI/SVG/ChevronRightIcon";
import { useRef, useEffect, useState } from "react";

const ImagesPreview = function ({ images }) {
  const imagesContainerStyle = {
    width: `${images.length * 100}%`,
    gridTemplateColumns: `repeat(${images.length}, 1fr)`,
  };

  const imagesSliderRef = useRef(null);
  const intersectionObserverRef = useRef(null);
  const firstImageRef = useRef(null);
  const lastImageRef = useRef(null);
  const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
  const [rightBtnIsVisible, setRightBtnIsVisible] = useState(false);

  const handleClickRightBtn = function () {
    imagesSliderRef.current.scrollBy({
      left: imagesSliderRef.current.getBoundingClientRect().width,
      behavior: "smooth",
    });
  };

  const handleClickLeftBtn = function () {
    imagesSliderRef.current.scrollBy({
      left: -imagesSliderRef.current.getBoundingClientRect().width,
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
      root: imagesSliderRef.current,
      threshold: 0.5,
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
    imagesPreview,
    imagesPreview__HiddenBtn,
    imagesPreview__LeftBtn,
    imagesPreview__RightBtn,
    imagesPreview__OuterContainer,
    imagesPreview__InnerContainer,
    imagesPreview__Image,
  } = styles;
  return (
    <div className={imagesPreview}>
      <button
        className={`${imagesPreview__LeftBtn} ${
          leftBtnIsVisible ? "" : imagesPreview__HiddenBtn
        }`}
        onClick={handleClickLeftBtn}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className={`${imagesPreview__RightBtn} ${
          rightBtnIsVisible ? "" : imagesPreview__HiddenBtn
        }`}
        onClick={handleClickRightBtn}
      >
        <ChevronRightIcon />
      </button>
      <div className={imagesPreview__OuterContainer} ref={imagesSliderRef}>
        <div
          className={imagesPreview__InnerContainer}
          style={imagesContainerStyle}
        >
          {images.map((image, index, imageList) => (
            <div
              className={imagesPreview__Image}
              ref={(node) => {
                if (index === 0) {
                  firstImageRef.current = node;
                } else if (index === imageList.length - 1) {
                  lastImageRef.current = node;
                }
              }}
            >
              <img src={image} alt={`Preview room ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesPreview;
