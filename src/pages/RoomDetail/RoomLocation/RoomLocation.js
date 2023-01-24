import styles from "./RoomLocation.module.scss";
import LeafletMap from "../../../components/LeafletMap/LeafletMap";
import axios from "axios";
import { forwardRef, useEffect, useState } from "react";

const RoomLocation = forwardRef(function ({ cityName }, ref) {
  const [coords, setCoords] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelRequest;
    const fetchGeoData = async function () {
      setIsLoading(true);
      setError(null);
      const url = `https://geocode.maps.co/search?q=${cityName
        .toLowerCase()
        .split(" ")
        .join("+")}`;

      try {
        const response = await axios({
          method: "GET",
          url,
          cancelToken: new axios.CancelToken(
            (token) => (cancelRequest = token)
          ),
        });
        const { lat, lon } = response.data[0];
        setCoords({
          lat,
          lng: lon,
        });
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchGeoData();

    return cancelRequest;
  }, [cityName]);

  const { roomLocation } = styles;
  return (
    <div className={roomLocation} ref={ref} id="location">
      <h3>Where you'll be</h3>
      <LeafletMap coords={coords} />
    </div>
  );
});

export default RoomLocation;
