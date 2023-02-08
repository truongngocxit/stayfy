import styles from "./BookingDetailBottomNav.module.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import GuestNumModal from "./GuestNumModal/GuestNumModal";
import DatePickerModal from "./DatePickerModal/DatePickerModal";
import { bookingInfoActions } from "../../../redux-store/bookingInfoSlice";
import { searchQueryActions } from "../../../redux-store/searchQuerySlice";

const BookingDetailBottomNav = function ({
  selectedRooms,
  id,
  onScrollToRoomTypes,
  review,
  name,
  price,
  location,
  images,
}) {
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  const { start: startDate, end: endDate } = useSelector(
    (state) => state.search.date
  );

  const today = new Date().getDate();

  const [selectedDate, setSelectedDate] = useState({
    start: startDate || new Date(new Date().setDate(today + 7)),
    end: endDate || new Date(new Date().setDate(today + 13)),
  });

  const handleChangeSelectedDate = function (event) {
    setSelectedDate({
      start: event[0].$d.toString(),
      end: event[1].$d.toString(),
    });
  };

  const handleSaveDateAndCloseModal = function () {
    reduxDispatch(
      searchQueryActions.setDateSearch({
        start: selectedDate.start.toString(),
        end: selectedDate.end.toString(),
      })
    );
    handleStopPickingDate();
  };

  const startDateLabel = new Date(selectedDate.start).toLocaleDateString(
    "en-us",
    {
      month: "short",
      day: "2-digit",
    }
  );

  const endDateLabel = new Date(selectedDate.end).toLocaleDateString("en-us", {
    month: "short",
    day: "2-digit",
  });

  let numOfRoomsLabel = "No rooms chosen";
  const totalRooms = selectedRooms.reduce(
    (totalRooms, currentRoom) => currentRoom.quantity + totalRooms,
    0
  );
  if (
    selectedRooms.some((room) => room.type === "entire" && room.quantity === 1)
  ) {
    numOfRoomsLabel = "Entire house";
  } else if (totalRooms === 1) {
    numOfRoomsLabel = "1 room";
  } else if (totalRooms > 1) {
    numOfRoomsLabel = `${totalRooms} rooms`;
  }

  const numOfDays =
    (new Date(selectedDate.end) - new Date(selectedDate.start)) /
    1000 /
    60 /
    60 /
    24;

  const totalPrice =
    selectedRooms.reduce(
      (totalPrice, currentRoom) =>
        totalPrice + currentRoom.price * currentRoom.quantity,
      0
    ) * numOfDays;
  // Guest state

  const {
    adults: reduxAdults,
    children: reduxChildren,
    babies: reduxBabies,
    animals: reduxAnimals,
  } = useSelector((state) => state.search.guestNum);

  let guestsLabel;
  const totalGuests = reduxAdults + reduxChildren;
  if (totalGuests === 1) {
    guestsLabel = "1 guest";
  } else if (totalGuests > 1) {
    guestsLabel = `${totalGuests} guests`;
  }

  const [isAddingGuestNum, setIsAddingGuestNum] = useState(false);

  const handleStartAddingGuestNum = function () {
    setIsAddingGuestNum(true);
  };

  const handleStopAddingGuestNum = function () {
    setIsAddingGuestNum(false);
  };

  const [isPickingDate, setIsPickingDate] = useState(false);

  const handleStartPickingDate = function () {
    setIsPickingDate(true);
  };

  const handleStopPickingDate = function () {
    setIsPickingDate(false);
  };

  const handleConfirmInformation = function () {
    const bookingInfo = {
      id,
      name,
      rooms: selectedRooms,
      review,
      location,
      image: images[0],
      date: {
        start: selectedDate.start,
        end: selectedDate.end,
      },
      guests: {
        adults: reduxAdults,
        children: reduxChildren,
        babies: reduxBabies,
        animals: reduxAnimals,
      },
    };

    reduxDispatch(bookingInfoActions.addRoomInfo(bookingInfo));
    navigate(`/checkout/${id}`);
  };

  const {
    bookingDetail,
    bookingDetail__Info,
    bookingDetail__Info__RoomsAndGuests,
    bookingDetail__Date,
    bookingDetail__Btn,
  } = styles;
  return (
    <>
      <div className={bookingDetail}>
        <div className={bookingDetail__Info}>
          <div className={bookingDetail__Info__RoomsAndGuests}>
            <span onClick={onScrollToRoomTypes}>{numOfRoomsLabel}</span>·
            <span onClick={handleStartAddingGuestNum}>{guestsLabel}</span>
          </div>
          <span
            className={bookingDetail__Date}
            onClick={handleStartPickingDate}
          >
            {startDateLabel} - {endDateLabel}
          </span>
        </div>

        {totalRooms === 0 ? (
          <button className={bookingDetail__Btn} onClick={onScrollToRoomTypes}>
            Choose Room
          </button>
        ) : (
          <button
            className={bookingDetail__Btn}
            onClick={handleConfirmInformation}
          >
            Reserve at ${totalPrice.toFixed(2)}
          </button>
        )}
      </div>

      {isAddingGuestNum &&
        createPortal(
          <GuestNumModal onCloseModal={handleStopAddingGuestNum} />,
          document.getElementById("modal-root")
        )}

      {isPickingDate &&
        createPortal(
          <DatePickerModal
            onCloseModal={handleStopPickingDate}
            onSaveDateAndCloseModal={handleSaveDateAndCloseModal}
            onChangeSelectedData={handleChangeSelectedDate}
            startDate={selectedDate.start}
            endData={selectedDate.end}
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default BookingDetailBottomNav;
