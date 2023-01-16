import styles from "./ImagesGallery.module.scss";
import useModalIsOpen from "../../custom-hooks/useModalIsOpen";
import ChevronLeft from "../UI/SVG/ChevronLeftIcon";
import HeartIcon from "../UI/SVG/HeartIcon";
import { sampleImages } from "../../assets/sample-images";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import { createPortal } from "react-dom";
import { useState } from "react";

const ImagesGallery = function ({ onCloseGallery }) {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);

  const handleOpenSlider = function () {
    setSliderIsOpen(true);
  };

  const handleCloseSlider = function () {
    setSliderIsOpen(false);
  };

  const {
    gallery,
    gallery__ImageContainer,
    gallery__Header,
    gallery__Header__BackBtn,
    gallery__Header__LikeBtn,
    gallery__Header__Heading,
  } = styles;
  return (
    <>
      <div className={gallery}>
        <div className={gallery__Header}>
          <button className={gallery__Header__BackBtn} onClick={onCloseGallery}>
            <ChevronLeft />
          </button>
          <h2 className={gallery__Header__Heading}>
            Chillin room - The room by the stream
          </h2>
          <button className={gallery__Header__LikeBtn}>
            <HeartIcon />
          </button>
        </div>
        <div className={gallery__ImageContainer}>
          {sampleImages.map((img) => (
            <GalleryItem key={img} src={img} onClick={handleOpenSlider} />
          ))}
        </div>
      </div>
      {sliderIsOpen &&
        createPortal(
          <ImagesSlider onCloseSlider={handleCloseSlider} />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default ImagesGallery;

const GalleryItem = function ({ src, className, onClick }) {
  const { galleryItem } = styles;
  return (
    <div className={`${galleryItem} ${className}`} onClick={onClick}>
      <img src={src} alt="sample" />
    </div>
  );
};
