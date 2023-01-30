import styles from "./TripItemModal.module.scss";

import TripBookingInfo from "./TripBookingInfo/TripBookingInfo";
import RoomInfo from "./RoomInfo/RoomInfo";

const TripItemModal = function () {
  const { itemModal } = styles;
  return (
    <div className={itemModal}>
      <TripBookingInfo />

      <RoomInfo />
    </div>
  );
};

export default TripItemModal;
