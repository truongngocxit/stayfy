import styles from "./TripItemModal.module.scss";
import BookingDetailAside from "../../../Checkout/BookingDetailAside/BookingDetailAside";
import RoomInfo from "./RoomInfo/RoomInfo";
import ItemModalTabs from "./ItemModalTabs/ItemModalTabs";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";
import { useState } from "react";

const TripItemModal = function ({
  name,
  rooms,
  review,
  location,
  date,
  images,
  guests,
  description,
  amenities,
  host,
  onCloseModal,
  bookingId,
}) {
  const [activeTab, setActiveTab] = useState("images");

  const handleChangeTab = function (tab) {
    setActiveTab(tab);
  };

  const {
    itemModal,
    itemModal__Tabs,
    itemModal__Price,
    itemModal__Info,
    itemModal__CloseBtn,
  } = styles;
  return (
    <div className={itemModal}>
      <button className={itemModal__CloseBtn} onClick={onCloseModal}>
        <CloseIcon />
      </button>
      <ItemModalTabs
        className={itemModal__Tabs}
        activeTab={activeTab}
        onChangeTab={handleChangeTab}
      />
      <BookingDetailAside
        name={name}
        rooms={rooms}
        review={review}
        location={location}
        date={date}
        image={images[0]}
        guests={guests}
        allowModify={false}
        className={itemModal__Price}
      />
      <RoomInfo
        description={description}
        name={name}
        images={images}
        className={itemModal__Info}
        activeTab={activeTab}
        amenities={amenities}
        location={location}
        host={host}
        bookingId={bookingId}
        onCloseModal={onCloseModal}
      />
    </div>
  );
};

export default TripItemModal;
