import styles from "./BookingDate.module.scss";
import DateItem from "./DateItem/DateItem.js";
import EditIcon from "../../../../components/UI/SVG/EditIcon";
const BookingDate = function () {
  const { bookingDate, bookingDate__EditIcon } = styles;
  return (
    <div className={bookingDate}>
      <div className={bookingDate__EditIcon}>
        <EditIcon />
      </div>
      <DateItem tag="IN" date="Mon 16 Jan 2023" time="13:00 – 23:30" />
      <DateItem tag="OUT" date="Thu 19 Jan 2023" time="Until 12:00" />
    </div>
  );
};

export default BookingDate;
