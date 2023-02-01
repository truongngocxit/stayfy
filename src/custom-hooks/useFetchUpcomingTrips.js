import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useFetchUpcomingTrips = function () {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [tripData, setTripData] = useState([]);

  const upcomingTrips = useSelector((state) => state.activeUser.upcomingTrips);

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      setError(null);
      try {
        const settledBookingInfos = await Promise.allSettled(
          upcomingTrips.map((trip) =>
            axios({
              method: "GET",
              url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/bookings/${trip.bookingId}.json`,
            })
          )
        );

        const cleansedBookingInfos = settledBookingInfos.map(
          (data) => data.value.data
        );

        const settledLodgeInfos = await Promise.allSettled(
          cleansedBookingInfos.map((bookInfo) =>
            axios({
              method: "GET",
              url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/lodges/${bookInfo.roomInfo.roomId}.json`,
            })
          )
        );

        const mergedList = cleansedBookingInfos.map((data, index) => ({
          ...upcomingTrips[index],
          ...data,
          roomInfo: {
            ...data.roomInfo,
            ...settledLodgeInfos[index].value.data,
          },
        }));

        setTripData(mergedList);
      } catch (error) {
        setError(`Failed to fetch upcoming trips. Error: ${error}`);
      }
      setIsFetching(false);
    })();
  }, [upcomingTrips]);

  return {
    tripData,
    isFetching,
    error,
  };
};

export default useFetchUpcomingTrips;
