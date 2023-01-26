import styles from "./DateAdjustModal.module.scss";
import "./customAntdStyle.scss";
import CloseIcon from "../../../../../components/UI/SVG/CloseIcon";
import DateRangePicker from "../../../../../components/DateRangePicker/DateRangePicker";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { bookingInfoActions } from "../../../../../redux-store/bookingInfoSlice";

const DateAdjustModal = function ({ onCloseDatePicker }) {
  const reduxDispatch = useDispatch();

  const dateFromReduxStore = useSelector(
    (state) => state.bookingInfo.roomInfo.date
  );

  const [selectedDate, setSelectedDate] = useState({
    start: dayjs(dateFromReduxStore.start),
    end: dayjs(dateFromReduxStore.end),
  });

  const handleChangeSelectedDate = function (event) {
    setSelectedDate({
      start: event[0],
      end: event[1],
    });
  };

  const handleSaveSelectedDate = function () {
    reduxDispatch(
      bookingInfoActions.replaceDate({
        start: selectedDate.start.$d.toString(),
        end: selectedDate.end.$d.toString(),
      })
    );
    onCloseDatePicker();
  };

  const { dateModal, dateModal__CloseBtn, dateModal__SaveBtn } = styles;
  return (
    <div className={`checkoutDatePicker  ${dateModal}`}>
      <button onClick={onCloseDatePicker} className={dateModal__CloseBtn}>
        <CloseIcon />
      </button>
      <DateRangePicker
        open={true}
        value={[selectedDate.start, selectedDate.end]}
        onChange={handleChangeSelectedDate}
        bordered={false}
        getPopupContainer={(popup) => {
          return popup.parentElement;
        }}
        onCalendarChange={(event) => console.log(event)}
      />
      <button className={dateModal__SaveBtn} onClick={handleSaveSelectedDate}>
        Save
      </button>
    </div>
  );
};

export default DateAdjustModal;
