import styles from "./ImagesPreview.module.scss";
import ExpandIcon from "../../../components/UI/SVG/ExpandIcon";
import ImagesGallery from "../../../components/ImagesGallery/ImagesGallery";
import PreviewImage from "./PreviewImage/PreviewImage";
import { forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import useModalIsOpen from "../../../custom-hooks/useModalIsOpen";

const ImagesPreview = forwardRef(function ({ images, name, className }, ref) {
  const [isShowGallery, setIsShowGallery] = useState(false);
  const [imgIndexToScrollTo, setImgIndexToScrollTo] = useState(null);

  useModalIsOpen(isShowGallery);

  const handleShowGallery = function (e) {
    setIsShowGallery(true);
  };

  const handleCloseGallery = function (e) {
    setIsShowGallery(false);
  };

  const handleClickImage = function (imgIndex) {
    setImgIndexToScrollTo(imgIndex);
    setIsShowGallery(true);
  };

  const { imagesPreview, imagesPreview__MainImg, imagesPreview__ShowBtn } =
    styles;

  const [mainPreviewImage, ...restPreviewImages] = images;
  return (
    <>
      <div className={`${imagesPreview} ${className}`} ref={ref} id="images">
        <PreviewImage
          onClick={handleClickImage.bind(null, 0)}
          className={imagesPreview__MainImg}
          src={mainPreviewImage}
          alt="dummy pic"
        />

        {restPreviewImages.slice(1, 5).map((image, index) => (
          <PreviewImage
            onClick={handleClickImage.bind(null, index + 1)}
            key={image}
            src={image}
          />
        ))}
        <button className={imagesPreview__ShowBtn} onClick={handleShowGallery}>
          <ExpandIcon />
          <span>Show all</span>
        </button>
      </div>
      {createPortal(
        <ImagesGallery
          imageScrolledTo={imgIndexToScrollTo}
          onCloseGallery={handleCloseGallery}
          name={name}
          images={images}
          isVisible={isShowGallery}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
});

export default ImagesPreview;
