import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activeUserActions } from "../redux-store/activeUserSlice";
import { railwayBackendURL } from "../utils/conts";
import axios from "axios";

const useDeleteAccount = function () {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const activeUserId = useSelector((state) => state.activeUser.id);
  const reduxDispatch = useDispatch();

  const deleteAccount = async function (onAfterDelete) {
    setIsDeleting(true);
    try {
      await axios({
        method: "DELETE",
        url: `${railwayBackendURL}/delete-user`,
        data: { userId: activeUserId },
      });

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
