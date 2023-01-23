import styles from "./DateRangePicker.module.scss";
import { DatePicker, ConfigProvider } from "antd";
import { forwardRef } from "react";
const { RangePicker } = DatePicker;

const DateRangePicker = function (
  { onFocus, onBlur, onChange, disabledDate, value },
  ref
) {
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
        value={value}
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        inputReadOnly={true}
        style={datePickerInlineStyle}
        onChange={onChange}
        placeholder={["Checkin", "Checkout"]}
        disabledDate={disabledDate}
      />
    </ConfigProvider>
  );
};

export default forwardRef(DateRangePicker);
