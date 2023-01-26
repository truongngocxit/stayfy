import styles from "./BookingDate.module.scss";
import DateItem from "./DateItem/DateItem.js";
import EditIcon from "../../../../components/UI/SVG/EditIcon";
import DateAdjustModal from "./DateAdjustModal/DateAdjustModal";
import Overlay from "../../../../components/UI/Overlay/Overlay";
import { useState } from "react";
import { createPortal } from "react-dom";

const BookingDate = function ({ date }) {
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const { start, end } = date;
  const { bookingDate, bookingDate__EditIcon } = styles;

  const handleOpenDatePicker = function () {
    setDatePickerIsOpen(true);
  };

  const handleCloseDatePicker = function () {
    setDatePickerIsOpen(false);
  };

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
        <button
          className={bookingDate__EditIcon}
          onClick={handleOpenDatePicker}
        >
          <EditIcon />
        </button>
        <DateItem tag="IN" date={startDateText} time="13:00 – 23:30" />
        <DateItem tag="OUT" date={endDateText} time="Until 12:00" />
      </div>
      {datePickerIsOpen &&
        createPortal(
          <Overlay zIndex={1200} onClick={handleCloseDatePicker} />,
          document.getElementById("overlay-root")
        )}
      {datePickerIsOpen &&
        createPortal(
          <DateAdjustModal
            datePickerIsOpen={datePickerIsOpen}
            onCloseDatePicker={handleCloseDatePicker}
          />,
          document.getElementById("modal-root")
        )}

      {/* <DateAdjustModal
        datePickerIsOpen={datePickerIsOpen}
        onCloseDatePicker={handleCloseDatePicker}
      /> */}
    </>
  );
};

export default BookingDate;
