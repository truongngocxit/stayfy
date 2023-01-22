import styles from "./ImagesGallery.module.scss";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import GalleryHeader from "./GalleryHeader/GalleryHeader";
import GalleryItem from "./GalleryItem/GalleryItem";
import { createPortal } from "react-dom";
import { useState } from "react";

const ImagesGallery = function ({ onCloseGallery, images, name }) {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);

  const handleOpenSlider = function () {
    setSliderIsOpen(true);
  };

  const handleCloseSlider = function () {
    setSliderIsOpen(false);
  };

  const { gallery, gallery__Container, gallery__Container__LargeImg } = styles;
  return (
    <>
      <div className={gallery}>
        <GalleryHeader name={name} onClick={onCloseGallery} />

        <div className={gallery__Container}>
          {images.map((img, index) => (
            <GalleryItem
              key={img}
              src={img}
              className={index % 3 === 0 ? gallery__Container__LargeImg : ""}
              onClick={handleOpenSlider}
            />
          ))}
        </div>
      </div>
      {sliderIsOpen &&
        createPortal(
          <ImagesSlider onCloseSlider={handleCloseSlider} images={images} />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default ImagesGallery;
