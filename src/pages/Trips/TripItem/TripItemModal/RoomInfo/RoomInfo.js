import styles from "./RoomInfo.module.scss";
import ImagesPreview from "./ImagesPreview/ImagesPreview";
import AboutHost from "../../../../RoomDetail/AboutHost/AboutHost";
import LocationMap from "../../../../../components/LocationMap/LocationMap";
import CancelTrip from "./CancelTrip/CancelTrip";
import AmenitiesList from "../../../../RoomDetail/AmenitiesModal/AmenitiesList/AmenitiesList";

const RoomInfo = function ({
  images,
  location,
  amenities,
  className,
  host,
  activeTab,
  bookingId,
  onCloseModal,
}) {
  const amenitiesEntries = Object.entries(amenities);
  const availableAmenities = amenitiesEntries
    .filter((a) => a[1])
    .map((a) => a[0]);
  const unavailableAmenities = amenitiesEntries
    .filter((a) => !a[1])
    .map((a) => a[0]);
  const { roomInfo, roomInfo__Amenities, roomInfo__Contact } = styles;
  return (
    <div className={`${roomInfo} ${className}`}>
      {activeTab === "images" && <ImagesPreview images={images} />}
      {activeTab === "facilities" && (
        <AmenitiesList
          availableAmenities={availableAmenities}
          unavailableAmenities={unavailableAmenities}
          className={roomInfo__Amenities}
        />
      )}
      {activeTab === "contact" && (
        <AboutHost hostInfo={host} className={roomInfo__Contact} />
      )}
      {activeTab === "location" && <LocationMap cityName={location} />}
      {activeTab === "cancel" && (
        <CancelTrip bookingId={bookingId} onCloseModal={onCloseModal} />
      )}
    </div>
  );
};

export default RoomInfo;
