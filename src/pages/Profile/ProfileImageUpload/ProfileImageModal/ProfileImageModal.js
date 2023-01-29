import styles from "./ProfileImageModal.module.scss";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";
import { useState } from "react";
import { useSelector } from "react-redux";
import useChangeProfileImage from "../../../../custom-hooks/useChangeProfileImage";
import { createPortal } from "react-dom";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";

const ProfileImageModal = function ({
  onCloseModal,
  activeUserProfileImage,
  onChangeProfileImage,
  isUpdatingImage,
}) {
  const [previewImage, setPreviewImage] = useState(null);

  const handleUploadImage = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", function (event) {
      setPreviewImage(event.target.result);
    });
  };

  const handleSaveImage = async function () {
    onChangeProfileImage(previewImage, onCloseModal);
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
    <>
      <div className={profileImageModal}>
        <div className={profileImageModal__Close} onClick={onCloseModal}>
          <CloseIcon />
        </div>
        <div className={profileImageModal__Image}>
          <img
            src={previewImage || activeUserProfileImage}
            alt="preview profile avatar"
          />
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
            <button
              className={profileImageModal__Actions__Save}
              onClick={handleSaveImage}
            >
              Save
            </button>
          ) : (
            <button className={profileImageModal__Actions__Delete}>
              Delete
            </button>
          )}
        </div>
      </div>
      {isUpdatingImage &&
        createPortal(
          <LoadingScreen />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default ProfileImageModal;
