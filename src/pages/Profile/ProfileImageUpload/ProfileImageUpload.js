import styles from "./ProfileImageUpload.module.scss";
import UploadIcon from "../../../components/UI/SVG/UploadIcon";
import ProfileImageModal from "./ProfileImageModal/ProfileImageModal";
import Overlay from "../../../components/UI/Overlay/Overlay";
import { createPortal } from "react-dom";
import { Tooltip } from "antd";
import useChangeProfileImage from "../../../custom-hooks/useChangeProfileImage";
import SkeletonTransition from "../../../components/SkeletonTransition/SkeletonTransition";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProfileImageUpload = function ({
  onOpenImageUpdate,
  onCloseImageUpdate,
  imageUpdateIsActive,
}) {
  const activeUserProfileImage = useSelector(
    (state) => state.activeUser.profileImage
  );

  const [profileImageHasLoaded, setProfileImageHasLoaded] = useState(false);

  const handleProfileImageHasLoaded = function () {
    setProfileImageHasLoaded(true);
  };

  const { isLoading, changeProfileImage, error, hasUpdated } =
    useChangeProfileImage();

  const {
    imageUpload,
    imageUpload__Image,
    imageUpload__Image__Skeleton,
    imageUpload__EditIcon,
  } = styles;

  return (
    <>
      <div className={imageUpload}>
        <Tooltip title="Change profile image" color="#333">
          <button className={imageUpload__EditIcon} onClick={onOpenImageUpdate}>
            <UploadIcon />
          </button>
        </Tooltip>

        <Tooltip
          title="Change successully"
          color="#00b4d8"
          placement="topLeft"
          open={hasUpdated}
        >
          <div className={imageUpload__Image}>
            <img
              src={
                activeUserProfileImage ||
                "https://firebasestorage.googleapis.com/v0/b/stayfy-d4fc1.appspot.com/o/misc%2Fplaceholder-profile-image.png?alt=media&token=d7ee83a6-7b08-49e1-9d75-14de009335c9"
              }
              alt="profile-avatar"
            />
          </div>
        </Tooltip>
      </div>

      {imageUpdateIsActive &&
        createPortal(
          <ProfileImageModal
            onCloseModal={onCloseImageUpdate}
            activeUserProfileImage={activeUserProfileImage}
            onChangeProfileImage={changeProfileImage}
            isUpdatingImage={isLoading}
          />,
          document.getElementById("modal-root")
        )}

      {imageUpdateIsActive &&
        createPortal(
          <Overlay zIndex={1500} onClick={onCloseImageUpdate} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default ProfileImageUpload;
