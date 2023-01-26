import styles from "./DateAdjustModal.module.scss";
import "./customAntdStyle.scss";
import CloseIcon from "../../../../../components/UI/SVG/CloseIcon";

import DateRangePicker from "../../../../../components/DateRangePicker/DateRangePicker";

const DateAdjustModal = function ({ onCloseDatePicker }) {
  const { dateModal, dateModal__CloseBtn } = styles;
  return (
    <div className={`checkoutDatePicker  ${dateModal}`}>
      <button onClick={onCloseDatePicker} className={dateModal__CloseBtn}>
        <CloseIcon />
      </button>
      <DateRangePicker
        open={true}
        bordered={false}
        getPopupContainer={(popup) => {
          return popup.parentElement;
        }}
      />
    </div>
  );
};

export default DateAdjustModal;
