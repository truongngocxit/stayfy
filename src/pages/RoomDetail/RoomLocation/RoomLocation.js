import styles from "./RoomLocation.module.scss";
import LeafletMap from "../../../components/LeafletMap/LeafletMap";
import { forwardRef } from "react";

const RoomLocation = forwardRef(function (_, ref) {
  const { roomLocation } = styles;
  return (
    <div className={roomLocation} ref={ref} id="location">
      <h3>Where you'll be</h3>
      <LeafletMap />
    </div>
  );
});

export default RoomLocation;
