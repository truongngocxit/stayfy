import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { activeUserActions } from "../redux-store/activeUserSlice";

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
    const targetUserUrl = `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/${activeUserId}.json`;
    setIsLoading(true);
    setHasChanged(false);
    setError(null);
    try {
      await axios({
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        url: targetUserUrl,
        data,
        cancelToken: new axios.CancelToken((cancelToken) => {
          setCancelRequest((_) => cancelToken);
        }),
      });

      const fetchResponse = await axios({
        method: "GET",
        url: targetUserUrl,
      });

      reduxDispatch(
        activeUserActions.userLogin({ id: activeUserId, ...fetchResponse.data })
      );
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
