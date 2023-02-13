import styles from "./BookingDetailAside.module.scss";
import BookingRoomInfo from "./BookingRoomInfo/BookingRoomInfo";
import BookingPriceSummary from "./BookingPriceSummary/BookingPriceSummary";
import BookingDate from "./BookingDate/BookingDate";
import GuestNum from "./GuestNum/GuestNum";
import LnBr from "../../../components/UI/Cosmetics/LineBreak/LineBreak";

const BookingDetailAside = function ({
  className,
  name,
  rooms,
  review,
  location,
  date,
  image,
  guests,
  allowModify = true,
}) {
  const { bookingDetail } = styles;
  return (
    <aside className={`${bookingDetail} ${className || ""}`}>
      <BookingRoomInfo
        name={name}
        review={review}
        location={location}
        image={image}
      />
      <LnBr />
      <BookingDate date={date} allowModify={allowModify} />
      <LnBr />
      <GuestNum guests={guests} allowModify={allowModify} />
      <LnBr />
      <BookingPriceSummary rooms={rooms} date={date} />
    </aside>
  );
};

export default BookingDetailAside;
