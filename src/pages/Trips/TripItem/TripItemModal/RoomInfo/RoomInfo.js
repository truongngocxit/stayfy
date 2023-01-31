import styles from "./RoomInfo.module.scss";
import ImagesPreview from "./ImagesPreview/ImagesPreview";
import RoomFeature from "../../../../RoomDetail/RoomFeature/RoomFeature";
import AboutHost from "../../../../RoomDetail/AboutHost/AboutHost";
import LocationMap from "../../../../../components/LocationMap/LocationMap";
import CancelTrip from "./CancelTrip/CancelTrip";

const RoomInfo = function ({
  images,
  location,
  amenities,
  className,
  host,
  activeTab,
}) {
  const { roomInfo } = styles;
  return (
    <div className={`${roomInfo} ${className}`}>
      {activeTab === "images" && <ImagesPreview images={images} />}
      {activeTab === "facilities" && <RoomFeature amenities={amenities} />}
      {activeTab === "contact" && <AboutHost hostInfo={host} />}
      {activeTab === "location" && <LocationMap cityName={location} />}
      {activeTab === "cancel" && <CancelTrip />}
    </div>
  );
};

export default RoomInfo;
