import styles from "./DateSearch.module.scss";
import DateRangePicker from "../../DateRangePicker/DateRangePicker";
import { useContext, forwardRef } from "react";
import DateSearchContext from "../../../searchContext/DateSearchContextProvider";

const DateSearch = function (
  { className, activeClassName, onFinishSearch },
  ref
) {
  const {
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

  const { dateSearch } = styles;
  return (
    <div
      ref={ref}
      className={`${dateSearch} ${className} ${
        datePickerIsFocus ? activeClassName : ""
      }`}
    >
      <DateRangePicker
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
