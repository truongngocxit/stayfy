import styles from "./RoomLocation.module.scss";
import { forwardRef } from "react";
import LocationMap from "../../../components/LocationMap/LocationMap";

const RoomLocation = forwardRef(function ({ cityName }, ref) {
  const { roomLocation } = styles;
  return (
    <div className={roomLocation} ref={ref} id="location">
      <h3>Where you'll be</h3>
      <LocationMap cityName={cityName} />
    </div>
  );
});

export default RoomLocation;
