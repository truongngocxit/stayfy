import styles from "./ProfileImageModal.module.scss";
import UserIcon from "../../../../components/UI/SVG/UserIcon";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";
import { useState } from "react";

const ProfileImageModal = function ({ onCloseModal }) {
  const [previewImage, setPreviewImage] = useState(null);

  const handleUploadImage = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", function (event) {
      setPreviewImage(event.target.result);
    });
  };

  const {
    profileImageModal,
    profileImageModal__Close,
    profileImageModal__Image,
    profileImageModal__Actions,
    profileImageModal__Actions__Upload,
    profileImageModal__Actions__Delete,
    profileImageModal__Actions__Save,
  } = styles;
  return (
    <div className={profileImageModal}>
      <div className={profileImageModal__Close} onClick={onCloseModal}>
        <CloseIcon />
      </div>
      <div className={profileImageModal__Image}>
        {!previewImage && <UserIcon />}
        {previewImage && (
          <img src={previewImage} alt="preview profile avatar" />
        )}
      </div>
      <div className={profileImageModal__Actions}>
        <label
          htmlFor="image-upload"
          className={profileImageModal__Actions__Upload}
        >
          <span>{previewImage ? "Upload file" : "Upload new"}</span>
          <input
            type="file"
            id="image-upload"
            onChange={handleUploadImage}
            accept="image/*"
          />
        </label>
        {previewImage ? (
          <button className={profileImageModal__Actions__Save}>Save</button>
        ) : (
          <button className={profileImageModal__Actions__Delete}>Delete</button>
        )}
      </div>
    </div>
  );
};

export default ProfileImageModal;
