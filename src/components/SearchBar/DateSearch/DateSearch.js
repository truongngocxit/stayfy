import styles from "./DateSearch.module.scss";
import DateRangePicker from "../../DateRangePicker/DateRangePicker";
import { useContext, forwardRef } from "react";
import DateSearchContext from "../../../contexts/searchContext/DateSearchContextProvider";
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

  return (
    <div
      ref={ref}
      className={`${dateSearch} ${className} ${
        datePickerIsFocus ? activeClassName : ""
      }`}
    >
      <DateRangePicker
        id="searchbar-picker"
        value={[start ? dayjs(start) : start, end ? dayjs(end) : end]}
        onFocus={handleFocusDatePicker}
        onBlur={handleBlurDatePicker}
        onChange={handleDateChangeAndFocusGuestNum}
      />
    </div>
  );
};

export default forwardRef(DateSearch);

const { dateSearch } = styles;
