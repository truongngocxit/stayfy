import styles from "./Trips.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import TripItem from "./TripItem/TripItem";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import LineBreak from "../../components/UI/Cosmetics/LineBreak/LineBreak";

import useFetchUpcomingTrips from "../../custom-hooks/useFetchUpcomingTrips";

const Trips = function () {
  const { tripData, isFetching, error } = useFetchUpcomingTrips();

  const {
    trips,
    trips__Heading,
    trips__Loading,
    trips__TripList,
    trips__NoTrip,
  } = styles;
  return (
    <>
      <div className={trips}>
        {isFetching && (
          <LoadingSpinner className={trips__Loading} color="#00b4d8" />
        )}
        {!isFetching && (
          <>
            <h2 className={trips__Heading}>
              {tripData.length > 0
                ? "Your upcoming trips"
                : "No trips booked... Yet"}
            </h2>
            <LineBreak />
            {tripData.length === 0 && (
              <div className={trips__NoTrip}>
                <h2>
                  Time to dust off your bags and start planning your next
                  adventure
                </h2>
                <button>Start searching</button>
              </div>
            )}

            {tripData.length > 0 && (
              <div className={trips__TripList}>
                {tripData.map((trip) => (
                  <TripItem
                    key={trip.bookingId}
                    bookingId={trip.id}
                    userTripId={trip.userTripId}
                    book={trip}
                    roomInfo={trip.roomInfo}
                    bookedDate={trip.date}
                    guestInfo={trip.guestInfo}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Trips;
