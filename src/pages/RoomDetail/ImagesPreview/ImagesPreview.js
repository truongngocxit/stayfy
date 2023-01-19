import styles from "./ImagesPreview.module.scss";
import ExpandIcon from "../../../components/UI/SVG/ExpandIcon";
import ImagesGallery from "../../../components/ImagesGallery/ImagesGallery";
import PreviewImage from "./PreviewImage/PreviewImage";
import { forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import useModalIsOpen from "../../../custom-hooks/useModalIsOpen";

const ImagesPreview = forwardRef(function (props, ref) {
  const [isShowGallery, setIsShowGallery] = useState(false);

  useModalIsOpen(isShowGallery);

  const handleShowGallery = function (e) {
    setIsShowGallery(true);
  };

  const handleCloseGallery = function (e) {
    setIsShowGallery(false);
  };

  const { imagesPreview, imagesPreview__MainImg, imagesPreview__ShowBtn } =
    styles;
  return (
    <>
      <div className={imagesPreview} ref={ref} id="images">
        <PreviewImage
          onClick={handleShowGallery}
          className={imagesPreview__MainImg}
          src="https://a0.muscache.com/im/pictures/ec1edb38-c5ba-48db-82bf-d2df94a1648a.jpg?im_w=960"
          alt="dummy pic"
        />
        {new Array(4).fill().map((image, index) => (
          <PreviewImage
            onClick={handleShowGallery}
            key={index}
            src="https://a0.muscache.com/im/pictures/ec1edb38-c5ba-48db-82bf-d2df94a1648a.jpg?im_w=960"
          />
        ))}
        <button className={imagesPreview__ShowBtn} onClick={handleShowGallery}>
          <ExpandIcon />
          <span>Show all</span>
        </button>
      </div>
      {isShowGallery &&
        createPortal(
          <ImagesGallery onCloseGallery={handleCloseGallery} />,
          document.getElementById("modal-root")
        )}
    </>
  );
});

export default ImagesPreview;
