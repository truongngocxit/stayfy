import styles from "./ProfileImageUpload.module.scss";
import UserIcon from "../../../components/UI/SVG/UserIcon";
import UploadIcon from "../../../components/UI/SVG/UploadIcon";
import ProfileImageModal from "./ProfileImageModal/ProfileImageModal";
import Overlay from "../../../components/UI/Overlay/Overlay";
import { createPortal } from "react-dom";
import { useState } from "react";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";

const ProfileImageUpload = function () {
  const { imageUpload, imageUpload__Placeholder, imageUpload__EditIcon } =
    styles;
  const [isChangingImage, setIsChangingImage] = useState(false);
  const activeUserProfileImage = useSelector(
    (state) => state.activeUser.profileImage
  );

  const handleStartChangingImage = function () {
    setIsChangingImage(true);
  };

  const handleStopChangingImage = function () {
    setIsChangingImage(false);
  };

  return (
    <>
      <div className={imageUpload}>
        <Tooltip title="Change profile image" color="#333">
          <button
            className={imageUpload__EditIcon}
            onClick={handleStartChangingImage}
          >
            <UploadIcon />
          </button>
        </Tooltip>
        <div className={imageUpload__Placeholder}>
          <img
            src={
              activeUserProfileImage ||
              "https://firebasestorage.googleapis.com/v0/b/stayfy-d4fc1.appspot.com/o/misc%2Fplaceholder-profile-image.png?alt=media&token=d7ee83a6-7b08-49e1-9d75-14de009335c9"
            }
            alt="profile-avatar"
          />
        </div>
      </div>
      {isChangingImage &&
        createPortal(
          <ProfileImageModal onCloseModal={handleStopChangingImage} />,
          document.getElementById("modal-root")
        )}

      {isChangingImage &&
        createPortal(
          <Overlay zIndex={1500} onClick={handleStopChangingImage} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default ProfileImageUpload;
