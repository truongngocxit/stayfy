import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { activeUserActions } from "../redux-store/activeUserSlice";

const useCancelTrip = function () {
  const [isCancelling, setIsCancelling] = useState(false);
  const [error, setError] = useState(null);
  const [cancelRequest, setCancelRequest] = useState(null);
  const activeUserId = useSelector((state) => state.activeUser.id);
  const reduxDispatch = useDispatch();
  const cancelTrip = async function (bookingId, userTripId, onAfterCancel) {
    setIsCancelling(true);
    setError(null);
    console.log(
      `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/bookings/${bookingId}.json`
    );
    console.log(
      `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/${activeUserId}/upcomingTrips/${userTripId}.json`
    );
    try {
      await axios({
        method: "DELETE",
        url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/bookings/${bookingId}.json`,
      });

      await axios({
        method: "DELETE",
        url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/${activeUserId}/upcomingTrips/${userTripId}.json`,
      });

      reduxDispatch(activeUserActions.removeTrip(bookingId));
    } catch (error) {
      setError(`Delete trip failed. Error: ${error}`);
    }

    onAfterCancel();
    setIsCancelling(false);
  };

  return {
    isCancelling,
    error,
    cancelTrip,
    cancelRequest,
  };
};

export default useCancelTrip;
