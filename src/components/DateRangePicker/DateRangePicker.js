import styles from "./DateRangePicker.module.scss";
import { DatePicker, ConfigProvider } from "antd";
import { forwardRef } from "react";
const { RangePicker } = DatePicker;

const DateRangePicker = function (
  {
    onFocus,
    onBlur,
    onChange,
    disabledDate,
    value,
    className,
    open,
    getPopupContainer,
  },
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
        className={className || ""}
        value={value}
        open={open}
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        inputReadOnly={true}
        style={datePickerInlineStyle}
        onChange={onChange}
        placeholder={["Checkin", "Checkout"]}
        disabledDate={disabledDate}
        getPopupContainer={getPopupContainer}
      />
    </ConfigProvider>
  );
};

export default forwardRef(DateRangePicker);
