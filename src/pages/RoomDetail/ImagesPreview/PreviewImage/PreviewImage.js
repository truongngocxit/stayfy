import styles from "./PreviewImage.module.scss";
import PreviewImageSkeleton from "./PreviewImageSkeleton/PreviewImageSkeleton";
import { useState } from "react";

const PreviewImage = function ({ className, onClick, src, lodgeName }) {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);

  const handleImageHasLoaded = function () {
    setImageHasLoaded(true);
  };

  const { previewImage } = styles;
  return (
    <div className={`${previewImage} ${className}`} onClick={onClick}>
      <PreviewImageSkeleton isLoading={!imageHasLoaded} />
      <img
        src={src}
        alt={`${lodgeName} preview`}
        onLoad={handleImageHasLoaded}
      />
    </div>
  );
};

export default PreviewImage;
