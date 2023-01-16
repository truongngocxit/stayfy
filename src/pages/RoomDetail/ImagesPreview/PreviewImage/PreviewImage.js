import styles from "./PreviewImage.module.scss";

const PreviewImage = function ({ className, onClick }) {
  const { previewImage } = styles;
  return (
    <div className={`${previewImage} ${className}`} onClick={onClick}>
      <img
        src="https://a0.muscache.com/im/pictures/ec1edb38-c5ba-48db-82bf-d2df94a1648a.jpg?im_w=960"
        alt="dummy pic"
      />
    </div>
  );
};

export default PreviewImage;
