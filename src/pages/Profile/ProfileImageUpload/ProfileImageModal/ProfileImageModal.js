import styles from "./ProfileImageModal.module.scss";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";
import { useState } from "react";
import { createPortal } from "react-dom";
import LoadingScreen from "../../../../components/UI/LoadingScreen/LoadingScreen";
import SkeletonTransition from "../../../../components/SkeletonTransition/SkeletonTransition";

const ProfileImageModal = function ({
  onCloseModal,
  activeUserProfileImage,
  onChangeProfileImage,
  onDeleteProfileImage,
  isUpdatingImage,
}) {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageHasLoaded, setPreviewImageHasLoaded] = useState(false);

  const handlePreviewImageHasLoaded = function () {
    setPreviewImageHasLoaded(true);
  };

  const handleUploadImage = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", function (event) {
      setPreviewImage(event.target.result);
    });
  };

  const handleSaveImage = function () {
    onChangeProfileImage(previewImage, onCloseModal);
  };

  const handleDeleteImage = function () {
    onDeleteProfileImage();
  };

  return (
    <>
      <div className={profileImageModal}>
        <div className={profileImageModal__Close} onClick={onCloseModal}>
          <CloseIcon />
        </div>
        <div className={profileImageModal__Image}>
          <SkeletonTransition
            isLoading={!previewImageHasLoaded}
            skeletonClassName={profileImageModal__Image__Skeleton}
          />
          <img
            src={previewImage || activeUserProfileImage}
            alt="Preview profile avatar"
            onLoad={handlePreviewImageHasLoaded}
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
            <button
              className={profileImageModal__Actions__Delete}
              onClick={handleDeleteImage}
            >
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

const {
  profileImageModal,
  profileImageModal__Close,
  profileImageModal__Image,
  profileImageModal__Image__Skeleton,
  profileImageModal__Actions,
  profileImageModal__Actions__Upload,
  profileImageModal__Actions__Delete,
  profileImageModal__Actions__Save,
} = styles;
