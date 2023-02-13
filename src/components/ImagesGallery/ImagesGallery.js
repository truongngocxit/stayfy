import styles from "./ImagesGallery.module.scss";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import GalleryHeader from "./GalleryHeader/GalleryHeader";
import GalleryItem from "./GalleryItem/GalleryItem";
import { createPortal } from "react-dom";
import { useState, useRef, useEffect } from "react";
import ModalTransition from "../ModalTransition/ModalTransition";

const ImagesGallery = function ({
  onCloseGallery,
  images,
  name,
  imageScrolledTo,
  isVisible,
}) {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const previewImagesRef = useRef(null);

  const handleOpenSlider = function (imageIndex) {
    setImageIndex(imageIndex);
    setSliderIsOpen(true);
  };

  const handleCloseSlider = function () {
    setSliderIsOpen(false);
  };

  useEffect(() => {
    if (imageScrolledTo) {
      previewImagesRef.current[imageScrolledTo].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [imageScrolledTo]);

  return (
    <>
      <ModalTransition className={gallery} isVisible={isVisible}>
        <GalleryHeader name={name} onClick={onCloseGallery} />
        <div className={gallery__GalleryContainer}>
          {images.map((img, index) => (
            <GalleryItem
              key={img}
              src={img}
              index={index}
              lodgeName={name}
              className={
                index % 3 === 0 ? gallery__ImgLarge : gallery__ImgSmall
              }
              onClick={handleOpenSlider.bind(null, index)}
              ref={(node) => {
                if (!previewImagesRef.current) {
                  previewImagesRef.current = [];
                }

                if (index <= 4) {
                  previewImagesRef.current = [
                    ...new Set([...previewImagesRef.current, node]),
                  ];
                }
              }}
            />
          ))}
        </div>
      </ModalTransition>
      {sliderIsOpen &&
        createPortal(
          <ImagesSlider
            onCloseSlider={handleCloseSlider}
            images={images}
            imageIndex={imageIndex}
            lodgeName={name}
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default ImagesGallery;

const {
  gallery,
  gallery__GalleryContainer,
  ["gallery__Img--Large"]: gallery__ImgLarge,
  ["gallery__Img--Small"]: gallery__ImgSmall,
} = styles;
