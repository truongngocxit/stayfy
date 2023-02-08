import styles from "./DateSearch.module.scss";
import DateRangePicker from "../../../../DateRangePicker/DateRangePicker";
import { useContext } from "react";
import DateSearchContext from "../../../../../contexts/searchContext/DateSearchContextProvider";
import dayjs from "dayjs";
import "./customDatePickerStyle.scss";

const DateSearch = function ({ onFinishSearch, isOn }) {
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
    onFinishSearch();
  };

  const { start, end } = selectedDate;

  const { date } = styles;
  return (
    <div className={`${date} smallerScreenSearchDate`}>
      <DateRangePicker
        open={isOn}
        getPopupContainer={(node) => node.parentElement}
        value={[start ? dayjs(start) : start, end ? dayjs(end) : end]}
        onFocus={handleFocusDatePicker}
        onBlur={handleBlurDatePicker}
        onChange={handleDateChangeAndFocusGuestNum}
      />
    </div>
  );
};

export default DateSearch;
