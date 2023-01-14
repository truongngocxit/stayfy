import styles from "./BookingDetailAside.module.scss";
import BookingRoomInfo from "./BookingRoomInfo/BookingRoomInfo";
import BookingPriceSummary from "./BookingPriceSummary/BookingPriceSummary";
import BookingDate from "./BookingDate/BookingDate";
import GuestNum from "./GuestNum/GuestNum";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";

const BookingDetailAside = function () {
  const { bookingDetail } = styles;
  return (
    <aside className={bookingDetail}>
      <BookingRoomInfo />
      <LineBreak />
      <BookingDate />
      <LineBreak />
      <GuestNum />
      <LineBreak />
      <BookingPriceSummary />
    </aside>
  );
};

export default BookingDetailAside;
