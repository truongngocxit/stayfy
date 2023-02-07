import styles from "./BookingDetailAside.module.scss";
import AsideHead from "./AsideHead/AsideHead";
import AsideInfo from "./AsideInfo/AsideInfo";
import AsideRateSummary from "./AsideRateSummary/AsideRateSummary";
import ButtonScroll from "./ButtonScroll/ButtonScroll";
import useGuestNum from "../../../custom-hooks/useGuestNum";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookingInfoActions } from "../../../redux-store/bookingInfoSlice";

const BookingDetailAside = function ({
  stickyNavHeight,
  name,
  price,
  review,
  location,
  onScrollToRoomTypes,
  selectedRooms,
  images,
  id,
}) {
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

  const numOfDays =
    (new Date(endDate) - new Date(startDate)) / 1000 / 60 / 60 / 24;

  // Guest state

  const {
    adults: reduxAdults,
    children: reduxChildren,
    babies: reduxBabies,
    animals: reduxAnimals,
  } = useSelector((state) => state.search.guestNum);

  const handleConfirmInformation = function () {
    const bookingInfo = {
      id,
      name,
      rooms: selectedRooms,
      review,
      location,
      image: images[0],
      date: {
        start: startDate.toString(),
        end: endDate.toString(),
      },
      guests: {
        adults: reduxAdults,
        children: reduxChildren,
        babies: reduxBabies,
        animals: reduxAnimals,
      },
    };
    reduxDispatch(bookingInfoActions.addRoomInfo(bookingInfo));
  };

  const atLeastOneItemIsAdded = selectedRooms.some((room) => room.quantity > 0);

  const { bookingDetail, bookingDetail__Btn } = styles;
  return (
    <div className={bookingDetail} style={{ top: `${40 + stickyNavHeight}px` }}>
      <AsideHead name={name} stars={review.toFixed(2)} />
      <AsideInfo
        startDate={startDate}
        endDate={endDate}
        onChangeDate={handleChangeDate}
        reduxAdults={reduxAdults}
        reduxChildren={reduxChildren}
        reduxBabies={reduxBabies}
        reduxAnimals={reduxAnimals}
      />
      {!atLeastOneItemIsAdded && (
        <ButtonScroll label="Choose room" onClick={onScrollToRoomTypes} />
      )}
      {atLeastOneItemIsAdded && (
        <>
          <Link
            to={`/checkout/${id}`}
            className={bookingDetail__Btn}
            onClick={handleConfirmInformation}
          >
            Reserve
          </Link>
          <AsideRateSummary
            numOfDays={numOfDays}
            price={price}
            selectedRooms={selectedRooms}
          />
        </>
      )}
    </div>
  );
};

export default BookingDetailAside;
