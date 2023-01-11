import styles from "./DateRangePicker.module.scss";
import { DatePicker, ConfigProvider } from "antd";
const { RangePicker } = DatePicker;

const DateRangePicker = function ({ onFocus, onBlur }) {
  const datePickerInlineStyle = {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    gap: "1rem",
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b4d8",
          fontSize: "16px",
        },
      }}
    >
      <RangePicker
        onFocus={onFocus}
        onBlur={onBlur}
        inputReadOnly={true}
        style={datePickerInlineStyle}
        placeholder={["Checkin", "Checkout"]}
      />
    </ConfigProvider>
  );
};

export default DateRangePicker;
