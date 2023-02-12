import styles from "./TripItem.module.scss";
import NavigateAwayIcon from "../../../components/UI/SVG/NavigateAwayIcon";
import TripItemDate from "./TripItemDate/TripItemDate";
import TripItemDetails from "./TripItemDetails/TripItemDetails";
import { useState, useRef, useEffect } from "react";
import Overlay from "../../../components/UI/Overlay/Overlay";
import { createPortal } from "react-dom";
import TripItemModal from "./TripItemModal/TripItemModal";

const TripItem = function ({ roomInfo, bookedDate, bookingId, userTripId }) {
  const [detailModalIsVisible, setDetailModalIsVisible] = useState(false);

  const roomReview = (
    roomInfo.reviews.reduce((sum, curReview) => sum + Number(curReview), 0) /
    roomInfo.reviews.length
  ).toFixed(2);
  const handleOpenDetailModal = function () {
    setDetailModalIsVisible(true);
  };

  const handleCloseDetailModal = function () {
    setDetailModalIsVisible(false);
  };

  const resizeObserverRef = useRef(null);
  const [screenSize, setScreenSize] = useState("large");
  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      if (entries[0].contentRect.width <= 600) {
        setScreenSize("small");
      } else if (entries[0].contentRect.width <= 768) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  const {
    tripItem,
    tripItem__Larger,
    tripItem__Smaller,
    tripItem__Date,
    tripItem__Info,
    tripItem__Info__Image,
    tripItem__NavLink,
  } = styles;
  return (
    <>
      <div
        className={`${tripItem} ${
          screenSize !== "large" ? tripItem__Smaller : tripItem__Larger
        }`}
        onClick={handleOpenDetailModal}
      >
        <div className={tripItem__NavLink}>
          <NavigateAwayIcon />
        </div>
        <TripItemDate
          date={roomInfo.date.start}
          className={tripItem__Date}
          isSmallerScreen={screenSize !== "large"}
        />
        <div className={tripItem__Info}>
          <div className={tripItem__Info__Image}>
            <img src={roomInfo.images[0]} alt="Upcoming trip preview pic" />
          </div>
          <TripItemDetails
            isSmallerScreen={screenSize === "large"}
            review={roomReview}
            name={roomInfo.name}
            location={roomInfo.location}
            bookedDate={bookedDate}
          />
        </div>
      </div>
      {createPortal(
        <TripItemModal
          name={roomInfo.name}
          location={roomInfo.location}
          date={roomInfo.date}
          rooms={roomInfo.rooms}
          review={roomReview}
          guests={roomInfo.guests}
          description={roomInfo.description}
          images={roomInfo.images}
          amenities={roomInfo.amenities}
          host={roomInfo.host}
          onCloseModal={handleCloseDetailModal}
          bookingId={bookingId}
          userTripId={userTripId}
          isVisible={detailModalIsVisible}
        />,
        document.getElementById("modal-root")
      )}
      {detailModalIsVisible &&
        createPortal(
          <Overlay zIndex={1200} onClick={handleCloseDetailModal} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default TripItem;
