import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useFetchUpcomingTrips = function () {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [tripData, setTripData] = useState([]);

  const upcomingTrips = useSelector((state) => state.activeUser.upcomingTrips);
  const userId = useSelector((state) => state.activeUser.id);

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      setError(null);
      try {
        const getTripsResponse = await axios({
          url: `https://stayfy-backend.onrender.com/upcoming-trips/${userId}`,
          method: "GET",
        });

        const cleansedTripsData = Object.entries(getTripsResponse.data).map(
          (e) => ({ id: e[0], ...e[1] })
        );

        const getLodgesResponse = await axios({
          url: `https://stayfy-backend.onrender.com/lodges-by-ids`,
          params: {
            lodges: cleansedTripsData.map((trip) => trip.roomInfo.roomId),
          },
          method: "GET",
        });

        const bookedLodges = Object.entries(getLodgesResponse.data).map(
          (data) => ({ id: data[0], ...data[1] })
        );

        const consolidatedTripsData = cleansedTripsData.map((trip) => ({
          ...trip,
          roomInfo: {
            ...trip.roomInfo,
            ...bookedLodges.find((lodge) => lodge.id === trip.roomInfo.roomId),
          },
        }));

        setTripData(consolidatedTripsData);
      } catch (error) {
        setError(`Failed to fetch upcoming trips. Error: ${error}`);
      }
      setIsFetching(false);
    })();
  }, [upcomingTrips, userId]);

  return {
    tripData,
    isFetching,
    error,
  };
};

export default useFetchUpcomingTrips;

// const settledBookingInfos = await Promise.allSettled(
//   upcomingTrips.map((trip) =>
//     axios({
//       method: "GET",
//       url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/bookings/${trip.bookingId}.json`,
//     })
//   )
// );
// console.log(cleansedTripsData.map((trip) => trip.roomInfo.roomId));
// console.log(consolidatedTripsData);

// const cleansedBookingInfos = settledBookingInfos.map(
//   (data) => data.value.data
// );

// const settledLodgeInfos = await Promise.allSettled(
//   cleansedBookingInfos.map((bookInfo) =>
//     axios({
//       method: "GET",
//       url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/lodges/${bookInfo.roomInfo.roomId}.json`,
//     })
//   )
// );

// const mergedList = cleansedBookingInfos.map((data, index) => ({
//   ...upcomingTrips[index],
//   ...data,
//   roomInfo: {
//     ...data.roomInfo,
//     ...settledLodgeInfos[index].value.data,
//   },
// }));

// console.log(mergedList);
