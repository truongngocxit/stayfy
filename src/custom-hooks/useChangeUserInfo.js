import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { activeUserActions } from "../redux-store/activeUserSlice";
import { railwayBackendURL } from "../utils/conts";

const useChangeUserInfo = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [error, setError] = useState(null);
  const [cancelRequest, setCancelRequest] = useState(null);
  const reduxDispatch = useDispatch();
  const activeUserId = useSelector((state) => state.activeUser.id);

  const handleHasChanged = function () {
    setHasChanged(true);
    setTimeout(() => setHasChanged(false), 1500);
  };

  const patchUserData = async function (data, onAfterChange) {
    setIsLoading(true);
    setHasChanged(false);
    setError(null);
    try {
      const response = await axios({
        method: "PATCH",
        url: `${railwayBackendURL}update-user`,
        data: { userId: activeUserId, updatedData: data },
      });

      const updatedUser = response.data;

      reduxDispatch(activeUserActions.userLogin(updatedUser));
      onAfterChange();
    } catch (error) {
      setError(`Failed to patch data. Error: ${error}`);
    }
    setIsLoading(false);
    handleHasChanged();
  };

  return {
    isLoading,
    error,
    cancelRequest,
    patchUserData,
    hasChanged,
  };
};

export default useChangeUserInfo;

// const targetUserUrl = `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/${activeUserId}.json`;

// await axios({
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   url: targetUserUrl,
//   data,
//   cancelToken: new axios.CancelToken((cancelToken) => {
//     setCancelRequest((_) => cancelToken);
//   }),
// });

// console.log(activeUserId);
// const fetchResponse = await axios({
//   method: "GET",
//   url: targetUserUrl,
// });
