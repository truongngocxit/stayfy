import styles from "./BookingDetailAside.module.scss";
import AsideHead from "./AsideHead/AsideHead";
import AsideInfo from "./AsideInfo/AsideInfo";
import AsideRateSummary from "./AsideRateSummary/AsideRateSummary";
import { useState } from "react";
import { useSelector } from "react-redux";

const BookingDetailAside = function ({ stickyNavHeight, price, review }) {
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
  console.log(endDate, startDate);
  const { bookingDetail, bookingDetail__Btn } = styles;
  return (
    <div className={bookingDetail} style={{ top: `${40 + stickyNavHeight}px` }}>
      <AsideHead price={price} stars={review.toFixed(2)} />
      <AsideInfo
        startDate={startDate}
        endDate={endDate}
        onChangeDate={handleChangeDate}
      />
      <AsideRateSummary numOfDays={numOfDays} price={price} />
      <button className={bookingDetail__Btn}>Reserve</button>
    </div>
  );
};

export default BookingDetailAside;
