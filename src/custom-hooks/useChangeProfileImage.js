import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { activeUserActions } from "../redux-store/activeUserSlice";
import { storage } from "../myAppFirebase/myAppFirebase";
import axios from "axios";

const useChangeProfileImage = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasUpdated, setHasUpdated] = useState(false);
  const activeUserId = useSelector((state) => state.activeUser.id);

  const reduxDispatch = useDispatch();

  const changeProfileImage = async function (newImage, onAfterUpdate) {
    setIsLoading(true);
    setError(null);
    setHasUpdated(false);
    try {
      const newProfileImageUrl = `user-profile-images/${activeUserId}.jpeg`;
      const newProfileImageRef = ref(storage, newProfileImageUrl);
      await uploadString(newProfileImageRef, newImage.split(",")[1], "base64", {
        contentType: "image/jpeg",
      });
      const url = await getDownloadURL(ref(storage, newProfileImageUrl));

      await axios({
        method: "PATCH",
        url: "https://stayfy-backend.onrender.com/update-user",
        data: {
          userId: activeUserId,
          updatedData: {
            profileImage: url,
          },
        },
      });

      reduxDispatch(activeUserActions.changeUserImage(url));
      onAfterUpdate();
    } catch (error) {
      setError(`Failed to change profile image. Error: ${error}`);
    }
    setIsLoading(false);
    setHasUpdated(true);
    setTimeout(() => setHasUpdated(false), 1500);
  };

  return {
    isLoading,
    error,
    changeProfileImage,
    hasUpdated,
  };
};

export default useChangeProfileImage;

// await fetch(
//   `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/${activeUserId}.json`,
//   {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ profileImage: url }),
//   }
// );
