import styles from "./DateAdjustModal.module.scss";
import "./CustomAntRangePicker.scss";
import DateRangePicker from "../../../../../components/DateRangePicker/DateRangePicker";
import { DatePicker } from "antd";
import { useEffect, useRef } from "react";

const { RangePicker } = DatePicker;

const DateAdjustModal = function () {
  const dateModalRef = useRef(null);

  const { dateModal, dateModal__Picker } = styles;
  return (
    <div className={dateModal} ref={dateModalRef} id="checkout-datepicker">
      <RangePicker
        open={true}
        disabledDate={(current) =>
          current < Date.now() || current > new Date(new Date().setMonth(2))
        }
        getPopupContainer={(dropdown) => dropdown.parentElement}
      />
    </div>
  );
};

export default DateAdjustModal;
