import styles from "./ImagesPreview.module.scss";
import ExpandIcon from "../../../components/UI/SVG/ExpandIcon";
import ImagesGallery from "../../../components/ImagesGallery/ImagesGallery";
import { forwardRef, useState } from "react";
import { createPortal } from "react-dom";

const ImagesPreview = forwardRef(function (props, ref) {
  const [isShowGallery, setIsShowGallery] = useState(false);

  const handleShowGallery = function (e) {
    setIsShowGallery(true);
  };

  const handleCloseGallery = function (e) {
    setIsShowGallery(false);
  };
  console.log(isShowGallery);
  const {
    imagesPreview,
    imagesPreview__Image,
    imagesPreview__Image_Main,
    imagesPreview__ShowBtn,
  } = styles;
  return (
    <>
      <div className={imagesPreview} ref={ref} id="images">
        <div className={`${imagesPreview__Image} ${imagesPreview__Image_Main}`}>
          <img
            src="https://a0.muscache.com/im/pictures/ec1edb38-c5ba-48db-82bf-d2df94a1648a.jpg?im_w=960"
            alt="dummy pic"
          />
        </div>
        <div className={imagesPreview__Image}>
          <img
            src="https://a0.muscache.com/im/pictures/ec1edb38-c5ba-48db-82bf-d2df94a1648a.jpg?im_w=960"
            alt="dummy pic"
          />
        </div>
        <div className={imagesPreview__Image}>
          <img
            src="https://a0.muscache.com/im/pictures/ec1edb38-c5ba-48db-82bf-d2df94a1648a.jpg?im_w=960"
            alt="dummy pic"
          />
        </div>
        <div className={imagesPreview__Image}>
          <img
            src="https://a0.muscache.com/im/pictures/ec1edb38-c5ba-48db-82bf-d2df94a1648a.jpg?im_w=960"
            alt="dummy pic"
          />
        </div>
        <div className={imagesPreview__Image}>
          <img
            src="https://a0.muscache.com/im/pictures/ec1edb38-c5ba-48db-82bf-d2df94a1648a.jpg?im_w=960"
            alt="dummy pic"
          />
        </div>
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
