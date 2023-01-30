import styles from "./Trips.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import TripItem from "./TripItem/TripItem";
import { useSelector } from "react-redux";
import LineBreak from "../../components/UI/Cosmetics/LineBreak/LineBreak";
import axios from "axios";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import TripItemModal from "./TripItem/TripItemModal/TripItemModal";
import Overlay from "../../components/UI/Overlay/Overlay";

const Trips = function () {
  const [tripData, setTripData] = useState([]);

  const upcomingTrips = useSelector((state) => state.activeUser.upcomingTrips);

  useEffect(() => {
    (async function () {
      const settledDataList = await Promise.allSettled(
        upcomingTrips.map((trip) =>
          axios({
            method: "GET",
            url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/bookings/${trip}.json`,
          })
        )
      );
      const cleansedDataList = settledDataList.map((data) => data.value.data);

      setTripData(cleansedDataList);
    })();
  }, [upcomingTrips]);

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
                key={trip.roomInfo.roomId}
                bookInfo={trip.roomInfo}
                bookedDate={trip.date}
              />
            ))}
          </div>
        )}
      </div>
      <StaticFooter />
      {createPortal(<TripItemModal />, document.getElementById("modal-root"))}
      {createPortal(
        <Overlay zIndex={1200} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Trips;
