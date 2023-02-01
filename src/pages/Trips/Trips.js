import styles from "./Trips.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import TripItem from "./TripItem/TripItem";
import { useSelector } from "react-redux";
import LineBreak from "../../components/UI/Cosmetics/LineBreak/LineBreak";
import axios from "axios";
import { useState, useEffect } from "react";

const Trips = function () {
  const [tripData, setTripData] = useState([]);

  const upcomingTrips = useSelector((state) => state.activeUser.upcomingTrips);
  console.log(upcomingTrips);
  useEffect(() => {
    (async function () {
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
        roomInfo: { ...data.roomInfo, ...settledLodgeInfos[index].value.data },
      }));

      setTripData(mergedList);
    })();
  }, [upcomingTrips]);

  console.log(tripData);

  const { trips, trips__Heading, trips__TripList, trips__NoTrip } = styles;
  return (
    <>
      <TopNav />
      <div className={trips}>
        <h2 className={trips__Heading}>
          {upcomingTrips.length > 0
            ? "Your upcoming trips"
            : "No trips booked... Yet"}
        </h2>
        <LineBreak />
        {tripData.length === 0 && (
          <div className={trips__NoTrip}>
            <h2>
              Time to dust off your bags and start planning your next adventure
            </h2>
            <button>Start searching</button>
          </div>
        )}

        {tripData.length > 0 && (
          <div className={trips__TripList}>
            {tripData.map((trip) => (
              <TripItem
                key={trip.bookingId}
                bookingId={trip.bookingId}
                userTripId={trip.userTripId}
                book={trip}
                roomInfo={trip.roomInfo}
                bookedDate={trip.date}
                guestInfo={trip.guestInfo}
              />
            ))}
          </div>
        )}
      </div>
      <StaticFooter />
    </>
  );
};

export default Trips;
