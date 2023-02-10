import styles from "./TripItemModal.module.scss";
import BookingDetailAside from "../../../Checkout/BookingDetailAside/BookingDetailAside";
import RoomInfo from "./RoomInfo/RoomInfo";
import ItemModalTabs from "./ItemModalTabs/ItemModalTabs";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";
import { useState, useRef, useEffect } from "react";
import ModalTransition from "../../../../components/ModalTransition/ModalTransition";

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
  userTripId,
  isVisible,
}) {
  const [activeTab, setActiveTab] = useState("images");

  const [isSmallerScreen, setIsSmallerScreen] = useState(false);
  const resizeObserverRef = useRef(null);
  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      if (entries[0].contentRect.width <= 744) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  const handleChangeTab = function (tab) {
    setActiveTab(tab);
  };

  const {
    itemModal,
    itemModal__Smaller,
    itemModal__Larger,
    itemModal__Tabs,
    itemModal__Price,
    itemModal__Info,
    itemModal__CloseBtn,
  } = styles;
  return (
    <ModalTransition
      className={`${itemModal} ${
        isSmallerScreen ? itemModal__Smaller : itemModal__Larger
      }`}
      isVisible={isVisible}
    >
      <button className={itemModal__CloseBtn} onClick={onCloseModal}>
        <CloseIcon />
      </button>
      <ItemModalTabs
        className={itemModal__Tabs}
        activeTab={activeTab}
        onChangeTab={handleChangeTab}
        isSmallerScreen={isSmallerScreen}
      />
      {!isSmallerScreen && (
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
      )}
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
        userTripId={userTripId}
        onCloseModal={onCloseModal}
        date={date}
        guests={guests}
        rooms={rooms}
        review={review}
      />
    </ModalTransition>
  );
};

export default TripItemModal;
