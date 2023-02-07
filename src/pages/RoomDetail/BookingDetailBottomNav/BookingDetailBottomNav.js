import styles from "./BookingDetailBottomNav.module.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import useGuestNum from "../../../custom-hooks/useGuestNum";
import { bookingInfoActions } from "../../../redux-store/bookingInfoSlice";
import { searchQueryActions } from "../../../redux-store/searchQuerySlice";
import { Link } from "react-router-dom";
import GuestNumberDropdown from "../../../components/SearchBar/GuestNumberDropdown/GuestNumberDropdown";
import GuestNumModal from "./GuestNumModal/GuestNumModal";

const BookingDetailBottomNav = function ({ selectedRooms, id }) {
  const reduxDispatch = useDispatch();

  // Date state
  const { start, end } = useSelector((state) => state.search.date);

  const today = new Date().getDate();

  const [selectedDate, setSelectedDate] = useState({
    start: start || new Date(new Date().setDate(today + 7)),
    end: end || new Date(new Date().setDate(today + 13)),
  });
  const handleChangeDate = function (event) {
    setSelectedDate({
      start: event[0].$d.toString(),
      end: event[1].$d.toString(),
    });
  };

  const { start: startDate, end: endDate } = selectedDate;

  const startDateLabel = new Date(startDate).toLocaleDateString("en-us", {
    month: "short",
    day: "2-digit",
  });

  const endDateLabel = new Date(endDate).toLocaleDateString("en-us", {
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
    (new Date(endDate) - new Date(startDate)) / 1000 / 60 / 60 / 24;

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
            <span>{numOfRoomsLabel}</span>·
            <span onClick={handleStartAddingGuestNum}>{guestsLabel}</span>
          </div>
          <span className={bookingDetail__Date}>
            {startDateLabel} - {endDateLabel}
          </span>
        </div>
        <Link className={bookingDetail__Btn} {...{ to: `/checkout/${id}` }}>
          {totalRooms === 0 ? "Choose Room" : `Reserve at $${totalPrice}`}
        </Link>
      </div>

      {isAddingGuestNum &&
        createPortal(
          <GuestNumModal onCloseModal={handleStopAddingGuestNum} />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default BookingDetailBottomNav;
