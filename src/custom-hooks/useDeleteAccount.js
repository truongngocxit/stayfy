import { useState } from "react";
import { useSelector, useDispatch } from "react";
import { activeUserActions } from "../redux-store/activeUserSlice";
import axios from "axios";

const useDeleteAccount = function () {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const activeUserId = useSelector((state) => state.activeUser.id);
  const reduxDispatch = useDispatch();

  const deleteAccount = async function (onAfterDelete) {
    const targetUserUrl = `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/${activeUserId}.json`;

    setIsDeleting(true);
    try {
      const response = await axios({
        method: "DELETE",
        url: targetUserUrl,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      reduxDispatch(activeUserActions.userLogout());
      onAfterDelete();
    } catch (error) {
      setError(`Account delete failed. Error: ${error}`);
    }
    setIsDeleting(false);
  };

  return {
    isDeleting,
    deleteAccount,
    error,
  };
};

export default useDeleteAccount;
