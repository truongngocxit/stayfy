import styles from "./GalleryItem.module.scss";
import { forwardRef, useState } from "react";
import PreviewImageSkeleton from "../../../pages/RoomDetail/ImagesPreview/PreviewImage/PreviewImageSkeleton/PreviewImageSkeleton";

const GalleryItem = function (
  { src, className, onClick, lodgeName, index },
  ref
) {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const handleImageHasLoaded = function () {
    setImageHasLoaded(true);
  };
  const { galleryItem } = styles;
  return (
    <div
      className={`${galleryItem} ${className || ""}`}
      onClick={onClick}
      ref={ref}
    >
      <PreviewImageSkeleton isLoading={!imageHasLoaded} />
      <img
        src={src}
        alt={`${lodgeName} gallery no.${index}`}
        onLoad={handleImageHasLoaded}
      />
    </div>
  );
};

export default forwardRef(GalleryItem);
