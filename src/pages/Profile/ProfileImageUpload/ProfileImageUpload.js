import styles from "./ProfileImageUpload.module.scss";
import UserIcon from "../../../components/UI/SVG/UserIcon";
import UploadIcon from "../../../components/UI/SVG/UploadIcon";
import ProfileImageModal from "./ProfileImageModal/ProfileImageModal";
import Overlay from "../../../components/UI/Overlay/Overlay";
import { createPortal } from "react-dom";
import { useState } from "react";

const ProfileImageUpload = function () {
  const { imageUpload, imageUpload__Placeholder, imageUpload__EditIcon } =
    styles;
  const [isChangingImage, setIsChangingImage] = useState(false);

  const handleStartChangingImage = function () {
    console.log("clicked");
    setIsChangingImage(true);
  };

  const handleStopChangingImage = function () {
    setIsChangingImage(false);
  };

  return (
    <>
      <div className={imageUpload}>
        <div
          className={imageUpload__EditIcon}
          onClick={handleStartChangingImage}
        >
          <UploadIcon />
        </div>
        <UserIcon className={imageUpload__Placeholder} />
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
