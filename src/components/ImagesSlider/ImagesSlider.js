import styles from "./ImagesSlider.module.scss";
import CloseIcon from "../UI/SVG/CloseIcon";
import ChevronLeftIcon from "../UI/SVG/ChevronLeftIcon";
import { useState, useEffect, useCallback } from "react";

const ImagesSlider = function ({
  onCloseSlider,
  images,
  imageIndex,
  lodgeName,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(imageIndex);

  const handleToPreviousImage = useCallback(
    function () {
      if (currentImageIndex === 0) {
        setCurrentImageIndex(images.length - 1);
      } else {
        setCurrentImageIndex((i) => i - 1);
      }
    },
    [currentImageIndex, images.length]
  );

  const handleToNextImage = useCallback(
    function () {
      if (currentImageIndex === images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex((i) => i + 1);
      }
    },
    [currentImageIndex, images.length]
  );

  useEffect(() => {
    const handleArrowLeftAndRight = function (event) {
      if (event.key === "ArrowLeft") {
        handleToPreviousImage();
      } else if (event.key === "ArrowRight") {
        handleToNextImage();
      }
    };

    document.addEventListener("keydown", handleArrowLeftAndRight);

    return () =>
      document.removeEventListener("keydown", handleArrowLeftAndRight);
  }, [handleToPreviousImage, handleToNextImage]);

  const {
    slider,
    slider__Nav,
    slider__Nav__CloseBtn,
    slider__ImageNum,
    slider__Slider,
    slider__Slider__Image,
    slider__Slider__BtnLeft,
    slider__Slider__BtnRight,
  } = styles;
  return (
    <div className={slider}>
      <nav className={slider__Nav}>
        <button className={slider__Nav__CloseBtn} onClick={onCloseSlider}>
          <CloseIcon />
        </button>
        <span className={slider__ImageNum}>
          {currentImageIndex + 1}/{images.length}
        </span>
      </nav>
      <div className={slider__Slider}>
        <button
          className={slider__Slider__BtnLeft}
          onClick={handleToPreviousImage}
        >
          <ChevronLeftIcon />
        </button>
        <div className={slider__Slider__Image}>
          <img
            src={images[currentImageIndex]}
            alt={`${lodgeName} preview no.${imageIndex}`}
          />
        </div>
        <button
          className={slider__Slider__BtnRight}
          onClick={handleToNextImage}
        >
          <ChevronLeftIcon />
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;
