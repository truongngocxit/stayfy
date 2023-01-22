import styles from "./PreviewImage.module.scss";

const PreviewImage = function ({ className, onClick, src }) {
  const { previewImage } = styles;
  return (
    <div className={`${previewImage} ${className}`} onClick={onClick}>
      <img src={src} alt="dummy pic" />
    </div>
  );
};

export default PreviewImage;
