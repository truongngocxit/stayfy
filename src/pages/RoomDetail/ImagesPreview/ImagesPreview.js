import styles from "./ImagesPreview.module.scss";
import ExpandIcon from "../../../components/UI/SVG/ExpandIcon";
import { forwardRef } from "react";

const ImagesPreview = forwardRef(function (props, ref) {
  const {
    imagesPreview,
    imagesPreview__Image,
    imagesPreview__Image_Main,
    imagesPreview__ShowBtn,
  } = styles;
  return (
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
      <button className={imagesPreview__ShowBtn}>
        <ExpandIcon />
        <span>Show all</span>
      </button>
    </div>
  );
});

export default ImagesPreview;
