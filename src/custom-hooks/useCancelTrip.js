import { useState } from "react";
import axios from "axios";

const useCancelTrip = function () {
  const [isCancelling, setIsCancelling] = useState(false);
  const [error, setError] = useState(null);
  const [cancelRequest, setCancelRequest] = useState(null);

  const cancelTrip = async function (bookingId, onAfterCancel) {
    setIsCancelling(true);
    setError(null);

    try {
      const response = await axios({
        method: "DELETE",
        url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/bookings/${bookingId}.json`,
        cancelToken: new axios.CancelToken((token) => setCancelRequest(token)),
      });

      console.log(response);
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
