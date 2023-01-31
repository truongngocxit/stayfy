import styles from "./LocationMap.module.scss";
import LeafletMap from "../LeafletMap/LeafletMap";
import axios from "axios";
import { useState, useEffect } from "react";

const LocationMap = function ({ cityName }) {
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
  return <LeafletMap coords={coords} />;
};

export default LocationMap;
