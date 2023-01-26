import styles from "./DateAdjustModal.module.scss";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const DateAdjustModal = function () {
  const { dateModal } = styles;
  return (
    <div className={dateModal}>
      <RangePicker
        open={true}
        getPopupContainer={(popup) => {
          return popup.parentElement;
        }}
      />
    </div>
  );
};

export default DateAdjustModal;
