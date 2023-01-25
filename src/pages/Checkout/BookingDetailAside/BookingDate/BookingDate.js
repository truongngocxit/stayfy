import styles from "./BookingDate.module.scss";
import DateItem from "./DateItem/DateItem.js";
import EditIcon from "../../../../components/UI/SVG/EditIcon";
import DateAdjustModal from "./DateAdjustModal/DateAdjustModa";
import Overlay from "../../../../components/UI/Overlay/Overlay";
import { createPortal } from "react-dom";

const BookingDate = function ({ date }) {
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
    <>
      <div className={bookingDate}>
        <div className={bookingDate__EditIcon}>
          <EditIcon />
        </div>
        <DateItem tag="IN" date={startDateText} time="13:00 – 23:30" />
        <DateItem tag="OUT" date={endDateText} time="Until 12:00" />
      </div>
      {/* {createPortal(
        <Overlay zIndex={1200} />,
        document.getElementById("overlay-root")
      )} */}
      {createPortal(<DateAdjustModal />, document.getElementById("modal-root"))}
    </>
  );
};

export default BookingDate;
