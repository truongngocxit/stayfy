import { useState } from "react";
import { ref, deleteObject } from "firebase/storage";
import { storage } from "../myAppFirebase/myAppFirebase";
import { useSelector, useDispatch } from "react-redux";
import { defaultProfileImage } from "../utils/conts";
import { activeUserActions } from "../redux-store/activeUserSlice";
import axios from "axios";

const useDeleteProfileImage = function () {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [hasDeleted, setHasDeleted] = useState(false);
  const activeUserId = useSelector((state) => state.activeUser.id);
  const reduxDispatch = useDispatch();

  const deleteProfileImage = async function () {
    setIsDeleting(true);
    setError(null);
    setHasDeleted(false);

    const userImageRef = ref(
      storage,
      `user-profile-images/${activeUserId}.jpeg`
    );

    await deleteObject(userImageRef);

    await axios({
      method: "PATCH",
      url: "https://stayfy-backend.onrender.com/update-user",
      data: {
        userId: activeUserId,
        updatedData: {
          profileImage: defaultProfileImage,
        },
      },
    });

    reduxDispatch(activeUserActions.changeUserImage(defaultProfileImage));
    setIsDeleting(false);
    setHasDeleted(true);
    setTimeout(() => setHasDeleted(false), 1500);
  };

  return {
    isDeleting,
    error,
    hasDeleted,
    deleteProfileImage,
  };
};

export default useDeleteProfileImage;
