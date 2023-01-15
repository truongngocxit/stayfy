import styles from "./ImagesGallery.module.scss";
import useModalIsOpen from "../../custom-hooks/useModalIsOpen";
import ChevronLeft from "../UI/SVG/ChevronLeftIcon";
import HeartIcon from "../UI/SVG/HeartIcon";
import { sampleImages } from "../../assets/sample-images";

const ImagesGallery = function ({ onCloseGallery }) {
  useModalIsOpen();
  const {
    gallery,
    gallery__ImageContainer,
    galleryItem,
    gallery__Header,
    gallery__Header__BackBtn,
    gallery__Header__LikeBtn,
    gallery__Header__Heading,
  } = styles;
  return (
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
          <GalleryItem key={img} src={img} />
        ))}
      </div>
    </div>
  );
};

export default ImagesGallery;

const GalleryItem = function ({ src, className }) {
  const { galleryItem } = styles;
  return (
    <div className={`${galleryItem} ${className}`}>
      <img src={src} alt="sample" />
    </div>
  );
};
