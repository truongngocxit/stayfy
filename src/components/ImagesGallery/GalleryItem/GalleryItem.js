import styles from "./GalleryItem.module.scss";

const GalleryItem = function ({ src, className, onClick }) {
  const { galleryItem } = styles;
  return (
    <div className={`${galleryItem} ${className || ""}`} onClick={onClick}>
      <img src={src} alt="sample" />
    </div>
  );
};

export default GalleryItem;
