import { createContext, useState } from "react";

const DateSearchContext = createContext();

const DateSearchContextProvider = function ({ children }) {
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
  return (
    <DateSearchContext.Provider
      value={{
        selectedDate,
        datePickerIsFocus,
        handleBlurDatePicker,
        handleFocusDatePicker,
        handleDatePickerChange,
      }}
    >
      {children}
    </DateSearchContext.Provider>
  );
};

export default DateSearchContextProvider;
