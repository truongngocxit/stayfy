import styles from "./GalleryHeader.module.scss";
import ChevronLeftIcon from "../../UI/SVG/ChevronLeftIcon";
import HeartIcon from "../../UI/SVG/HeartIcon";

const GalleryHeader = function ({ name, onClick, className }) {
  const {
    galleryHeader,
    galleryHeader__BackBtn,
    galleryHeader__Heading,
    galleryHeader__LikeBtn,
  } = styles;
  return (
    <div className={`${galleryHeader} ${className || ""}`}>
      <button className={galleryHeader__BackBtn} onClick={onClick}>
        <ChevronLeftIcon />
      </button>
      <h2 className={galleryHeader__Heading}>{name}</h2>
      <button className={galleryHeader__LikeBtn}>
        <HeartIcon />
      </button>
    </div>
  );
};

export default GalleryHeader;
