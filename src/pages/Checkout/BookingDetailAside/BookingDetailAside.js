import styles from "./BookingDetailAside.module.scss";
import BookingRoomInfo from "./BookingRoomInfo/BookingRoomInfo";
import BookingPriceSummary from "./BookingPriceSummary/BookingPriceSummary";
import BookingDate from "./BookingDate/BookingDate";
import GuestNum from "./GuestNum/GuestNum";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";
import { useSelector } from "react-redux";

const BookingDetailAside = function () {
  const { name, rooms, review, location, date, image, guests } = useSelector(
    (state) => state.bookingInfo.roomInfo
  );

  const { bookingDetail } = styles;
  return (
    <aside className={bookingDetail}>
      <BookingRoomInfo
        name={name}
        review={review}
        location={location}
        image={image}
      />
      <LineBreak />
      <BookingDate date={date} />
      <LineBreak />
      <GuestNum guests={guests} />
      <LineBreak />
      <BookingPriceSummary rooms={rooms} />
    </aside>
  );
};

export default BookingDetailAside;
