import styles from "./DateSearch.module.scss";
import DateRangePicker from "../../DateRangePicker/DateRangePicker";
import { useContext, forwardRef, useState } from "react";
import DateSearchContext from "../../../searchContext/DateSearchContextProvider";
import dayjs from "dayjs";

const DateSearch = function (
  { className, activeClassName, onFinishSearch },
  ref
) {
  const {
    selectedDate,
    datePickerIsFocus,
    handleBlurDatePicker,
    handleFocusDatePicker,
    handleDatePickerChange,
  } = useContext(DateSearchContext);

  const handleDateChangeAndFocusGuestNum = function (event) {
    handleDatePickerChange(event);
    handleBlurDatePicker();
    setTimeout(onFinishSearch, 0);
  };

  const { start, end } = selectedDate;

  const { dateSearch } = styles;

  return (
    <div
      ref={ref}
      className={`${dateSearch} ${className} ${
        datePickerIsFocus ? activeClassName : ""
      }`}
    >
      <DateRangePicker
        value={[start ? dayjs(start) : start, end ? dayjs(end) : end]}
        onFocus={handleFocusDatePicker}
        onBlur={handleBlurDatePicker}
        onChange={handleDateChangeAndFocusGuestNum}
        disabledDate={(current) =>
          current < Date.now() || current > new Date(new Date().setMonth(2))
        }
      />
    </div>
  );
};

export default forwardRef(DateSearch);
