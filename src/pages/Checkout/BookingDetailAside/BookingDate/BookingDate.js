import styles from "./BookingDate.module.scss";
import DateItem from "./DateItem/DateItem.js";
import EditIcon from "../../../../components/UI/SVG/EditIcon";
import DateRangePicker from "../../../../components/DateRangePicker/DateRangePicker";
import useDropdown from "../../../../custom-hooks/useDropdown";

const BookingDate = function ({ date }) {
  const { dropdownIsVisible, containerRef, handleOpenDropdown } = useDropdown();

  const { start, end } = date;
  const { bookingDate, bookingDate__EditIcon } = styles;

  const startDateText = new Date(start).toLocaleDateString("en-us", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const endDateText = new Date(end).toLocaleDateString("en-us", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className={bookingDate} ref={containerRef}>
      <div className={bookingDate__EditIcon} onClick={handleOpenDropdown}>
        <EditIcon />
      </div>
      <DateItem tag="IN" date={startDateText} time="13:00 – 23:30" />
      <DateItem tag="OUT" date={endDateText} time="Until 12:00" />
      {dropdownIsVisible && <DateRangePicker />}
    </div>
  );
};

export default BookingDate;
