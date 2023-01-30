import styles from "./TripItem.module.scss";
import NavigateAwayIcon from "../../../components/UI/SVG/NavigateAwayIcon";
import TripItemDate from "./TripItemDate/TripItemDate";
import TripItemDetails from "./TripItemDetails/TripItemDetails";
import { useState, useEffect } from "react";
import axios from "axios";

const TripItem = function ({ tripDate, bookInfo, bookedDate }) {
  const [isLoading, setIsLoading] = useState(false);
  const [lodgeData, setLodgeData] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    (async function () {
      const response = await axios({
        method: "GET",
        url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/lodges/${bookInfo.roomId}.json`,
      });
      setLodgeData(response.data);
    })();
  }, [bookInfo.roomId]);

  const lodgeReview = lodgeData?.reviews
    ? (
        lodgeData.reviews.reduce(
          (sum, curReview) => sum + Number(curReview),
          0
        ) / lodgeData.reviews.length
      ).toFixed(2)
    : "";

  const { tripItem, tripItem__Info, tripItem__Info__Image, tripItem__NavLink } =
    styles;
  return (
    <div className={tripItem}>
      <div className={tripItem__NavLink}>
        <NavigateAwayIcon />
      </div>
      <TripItemDate date={bookInfo.date.start} />
      <div className={tripItem__Info}>
        <div className={tripItem__Info__Image}>
          <img src={lodgeData?.images[0] || ""} alt="sample landscape" />
        </div>
        <TripItemDetails
          review={lodgeReview}
          name={lodgeData?.name || ""}
          location={lodgeData?.location || ""}
          bookedDate={bookedDate}
        />
      </div>
    </div>
  );
};

export default TripItem;
