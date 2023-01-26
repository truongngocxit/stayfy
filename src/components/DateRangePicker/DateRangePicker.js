import styles from "./DateRangePicker.module.scss";
import { DatePicker, ConfigProvider } from "antd";
import { forwardRef } from "react";
const { RangePicker } = DatePicker;

const DateRangePicker = function (
  {
    onFocus,
    onBlur,
    onChange,
    onCalendarChange,
    value,
    className,
    open,
    getPopupContainer,
    bordered,
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
        onCalendarChange={onCalendarChange}
        bordered={bordered}
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
        getPopupContainer={getPopupContainer}
        disabledDate={(current) =>
          current < Date.now() || current > new Date(new Date().setMonth(2))
        }
      />
    </ConfigProvider>
  );
};

export default forwardRef(DateRangePicker);
