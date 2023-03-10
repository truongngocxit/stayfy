import { createContext, useState } from "react";

const DateSearchContext = createContext();

const DateSearchContextProvider = function ({ children }) {
  const [datePickerIsFocus, setDatePickerIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState({ start: null, end: null });

  const handleFocusDatePicker = function () {
    setDatePickerIsFocus(true);
  };
  const handleBlurDatePicker = function () {
    setDatePickerIsFocus(false);
  };

  const handleDatePickerChange = function (event) {
    if (!event) {
      setSelectedDate({
        start: null,
        end: null,
      });
      return;
    }
    setSelectedDate({
      start: event[0].$d.toString(),
      end: event[1].$d.toString(),
    });
  };

  const handleClearDatePicker = function (event) {
    setSelectedDate({
      start: null,
      end: null,
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
        handleClearDatePicker,
      }}
    >
      {children}
    </DateSearchContext.Provider>
  );
};

export { DateSearchContextProvider };
export default DateSearchContext;
