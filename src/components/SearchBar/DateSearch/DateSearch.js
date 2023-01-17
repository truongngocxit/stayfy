import styles from "./DateSearch.module.scss";
import DateRangePicker from "../../DateRangePicker/DateRangePicker";
import { useState, useContext } from "react";
import DateSearchContext from "../../searchContext/DateSearchContextProvider";

const DateSearch = function ({ className, activeClassName }) {
  const {
    selectedDate,
    datePickerIsFocus,
    handleBlurDatePicker,
    handleFocusDatePicker,
    handleDatePickerChange,
  } = useContext(DateSearchContext);

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
