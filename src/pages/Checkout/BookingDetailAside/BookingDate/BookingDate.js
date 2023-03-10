import styles from "./BookingDate.module.scss";
import DateItem from "./DateItem/DateItem.js";
import DateAdjustModal from "./DateAdjustModal/DateAdjustModal";
import Overlay from "../../../../components/UI/Overlay/Overlay";
import EditButton from "../EditButton/EditButton";
import { useState } from "react";
import { createPortal } from "react-dom";

const BookingDate = function ({ date, allowModify }) {
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
        {allowModify && (
          <EditButton
            className={bookingDate__EditIcon}
            onClick={handleOpenDatePicker}
          />
        )}
        <DateItem tag="IN" date={startDateText} time="13:00 - 23:30" />
        <DateItem tag="OUT" date={endDateText} time="Until 12:00" />
      </div>

      {createPortal(
        <DateAdjustModal
          isVisible={datePickerIsOpen}
          datePickerIsOpen={datePickerIsOpen}
          onCloseDatePicker={handleCloseDatePicker}
        />,
        document.getElementById("modal-root")
      )}

      {datePickerIsOpen &&
        createPortal(
          <Overlay zIndex={1200} onClick={handleCloseDatePicker} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default BookingDate;
