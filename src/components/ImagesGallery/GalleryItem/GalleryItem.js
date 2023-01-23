import styles from "./GalleryItem.module.scss";
import { forwardRef } from "react";

const GalleryItem = function ({ src, className, onClick }, ref) {
  const { galleryItem } = styles;
  return (
    <div
      className={`${galleryItem} ${className || ""}`}
      onClick={onClick}
      ref={ref}
    >
      <img src={src} alt="sample" />
    </div>
  );
};

export default forwardRef(GalleryItem);
