import styles from "./DateSearch.module.scss";
import DateRangePicker from "../../DateRangePicker/DateRangePicker";
import { useState } from "react";

const DateSearch = function ({ className, activeClassName }) {
  const [datePickerIsFocus, setDatePickerIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleFocusDatePicker = function () {
    setDatePickerIsFocus(true);
  };
  const handleBlurDatePicker = function () {
    setDatePickerIsFocus(false);
  };

  const handleDatePickerChange = function (event) {
    setSelectedDate({
      start: event[0].$d,
      end: event[1].$d,
    });
  };

  const { dateSearch } = styles;
  return (
    <div
      className={`${dateSearch} ${className} ${
        datePickerIsFocus ? activeClassName : ""
      }`}
    >
      <DateRangePicker
        onFocus={handleFocusDatePicker}
        onBlur={handleBlurDatePicker}
        onChange={handleDatePickerChange}
        disabledDate={(current) =>
          current < Date.now() || current > new Date(new Date().setMonth(2))
        }
      />
    </div>
  );
};

export default DateSearch;
