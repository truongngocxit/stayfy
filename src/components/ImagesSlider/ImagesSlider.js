import styles from "./ImagesSlider.module.scss";
import { sampleImages } from "../../assets/sample-images";
import CloseIcon from "../UI/SVG/CloseIcon";
import ChevronLeftIcon from "../UI/SVG/ChevronLeftIcon";

import { useState } from "react";

const ImagesSlider = function ({ onCloseSlider }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleToPreviousImage = function () {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(sampleImages.length - 1);
    } else {
      setCurrentImageIndex((i) => i - 1);
    }
  };

  const handleToNextImage = function () {
    if (currentImageIndex === sampleImages.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex((i) => i + 1);
    }
  };

  const {
    slider,
    slider__Nav,
    slider__Nav__CloseBtn,
    slider__ImageNum,
    slider__Slider,
    slider__Slider__Image,
    slider__Slider__BtnLeft,
    slider__Slider__BtnRight,
    slider__Description,
  } = styles;
  return (
    <div className={slider}>
      <nav className={slider__Nav}>
        <button className={slider__Nav__CloseBtn} onClick={onCloseSlider}>
          <CloseIcon />
        </button>
        <span className={slider__ImageNum}>
          {currentImageIndex + 1}/{sampleImages.length}
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
          <img src={sampleImages[currentImageIndex]} alt="sample" />
        </div>
        <button
          className={slider__Slider__BtnRight}
          onClick={handleToNextImage}
        >
          <ChevronLeftIcon />
        </button>
      </div>
      <footer className={slider__Description}>
        <p>
          The surrounding hills and paddy fields as seen from our Balai with
          Gunung Raya, the highest peak in Langkawi.
        </p>
      </footer>
    </div>
  );
};

export default ImagesSlider;
