import styles from "./RoomFeature.module.scss";
import { forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "../../../components/UI/Overlay/Overlay";
import AmenitiesModal from "../AmenitiesModal/AmenitiesModal";
import getAmenityIcon from "../../../utils/getAmenityIcon";

const RoomFeature = forwardRef(function ({ amenities }, ref) {
  const [amenitiesModalIsShown, setAmenitiesModalIsShown] = useState(false);

  const amenitiesEntries = Object.entries(amenities);

  const availableAmenities = amenitiesEntries
    .filter((a) => a[1])
    .map((a) => a[0]);
  const unavailableAmenities = amenitiesEntries
    .filter((a) => !a[1])
    .map((a) => a[0]);

  const handleOpenAmenitiesModal = function () {
    setAmenitiesModalIsShown(true);
  };

  const handleCloseAmenitiesModal = function () {
    setAmenitiesModalIsShown(false);
  };

  return (
    <>
      <div className={roomFeatures} ref={ref} id="features">
        <h2>What this place offers</h2>
        <ul className={roomFeatures__List}>
          {availableAmenities.slice(0, 10).map((amenity) => {
            const icon = getAmenityIcon(amenity);
            return (
              <li key={icon.text} className={roomFeatures__Item}>
                {icon.icon}
                <span>{icon.text}</span>
              </li>
            );
          })}
        </ul>
        <button
          className={roomFeatures__MoreBtn}
          onClick={handleOpenAmenitiesModal}
        >
          Show all amenities
        </button>
      </div>
      {createPortal(
        <AmenitiesModal
          onCloseModal={handleCloseAmenitiesModal}
          availableAmenities={availableAmenities}
          unavailableAmenities={unavailableAmenities}
          isVisible={amenitiesModalIsShown}
        />,
        document.getElementById("modal-root")
      )}

      {amenitiesModalIsShown &&
        createPortal(
          <Overlay zIndex={1500} onClick={handleCloseAmenitiesModal} />,
          document.getElementById("modal-root")
        )}
    </>
  );
});

export default RoomFeature;

const {
  roomFeatures,
  roomFeatures__List,
  roomFeatures__Item,
  roomFeatures__MoreBtn,
} = styles;
