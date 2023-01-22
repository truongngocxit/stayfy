import styles from "./StayItemImage.module.scss";
import HeartIcon from "../../../UI/SVG/HeartIcon";
import ChevronLeftIcon from "../../../UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../../../UI/SVG/ChevronRightIcon";
import { useState } from "react";

const StayItemImage = function ({ className, imgs }) {
  const [btnIsVisible, setBtnIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleHoverImg = function () {
    setBtnIsVisible(true);
  };

  const handleBlurImg = function () {
    setBtnIsVisible(false);
  };

  const handleClickNextImage = function (event) {
    //event.stopPropagation();
    event.preventDefault();
    if (activeImageIndex === imgs.length - 1) {
      setActiveImageIndex(0);
      return;
    }
    setActiveImageIndex(activeImageIndex + 1);
  };

  const handleClickPreviousImage = function (event) {
    //event.stopPropagation();
    event.preventDefault();
    if (activeImageIndex === 0) {
      setActiveImageIndex(imgs.length - 1);
      return;
    }
    setActiveImageIndex(activeImageIndex - 1);
  };

  const {
    itemImage,
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

      <img src={imgs[activeImageIndex]} alt="dummy" />

      <button
        className={`${itemImage__LeftBtn} ${
          !btnIsVisible || activeImageIndex === 0 ? itemImage__HiddenBtn : ""
        }`}
        onClick={handleClickPreviousImage}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className={`${itemImage__RightBtn} ${
          !btnIsVisible || activeImageIndex === imgs.length - 1
            ? itemImage__HiddenBtn
            : ""
        }`}
        onClick={handleClickNextImage}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default StayItemImage;
