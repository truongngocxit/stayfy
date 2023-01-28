import styles from "./ProfileImageModal.module.scss";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activeUserActions } from "../../../../redux-store/activeUserSlice";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../myAppFirebase/myAppFirebase";

const ProfileImageModal = function ({ onCloseModal }) {
  const [previewImage, setPreviewImage] = useState(null);
  const reduxDispatch = useDispatch();

  const { id: activeUserId, profileImage: activeUserProfileImage } =
    useSelector((state) => state.activeUser);

  const handleUploadImage = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", function (event) {
      setPreviewImage(event.target.result);
    });
  };

  const handleSaveImage = async function () {
    const newProfileImageUrl = `user-profile-images/${activeUserId}.jpeg`;
    const newProfileImageRef = ref(storage, newProfileImageUrl);
    await uploadString(
      newProfileImageRef,
      previewImage.split(",")[1],
      "base64",
      {
        contentType: "image/jpeg",
      }
    );
    const url = await getDownloadURL(ref(storage, newProfileImageUrl));
    const response = await fetch(
      `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/${activeUserId}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profileImage: url }),
      }
    );

    reduxDispatch(activeUserActions.changeUserImage(url));
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
        <img
          src={
            activeUserProfileImage ||
            "https://firebasestorage.googleapis.com/v0/b/stayfy-d4fc1.appspot.com/o/misc%2Fplaceholder-profile-image.png?alt=media&token=d7ee83a6-7b08-49e1-9d75-14de009335c9"
          }
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
          <button className={profileImageModal__Actions__Delete}>Delete</button>
        )}
      </div>
    </div>
  );
};

export default ProfileImageModal;
