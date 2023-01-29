import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

const useChangeProfileImage = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const activeUserId = useSelector((state) => state.activeUser.id);

  const changeProfileImage = function () {};
};

export default useChangeProfileImage;
