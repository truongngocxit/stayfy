import styles from "./DatePickerModal.module.scss";
import DateRangePicker from "../../../../components/DateRangePicker/DateRangePicker";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";
import { createPortal } from "react-dom";
import Overlay from "../../../../components/UI/Overlay/Overlay";
import "./customDatePickerStyle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchQueryActions } from "../../../../redux-store/searchQuerySlice";
import { useState } from "react";
import dayjs from "dayjs";

const DatePickerModal = function ({
  onSaveDateAndCloseModal,
  onChangeSelectedData,
  startDate,
  endData,
}) {
  // const reduxDispatch = useDispatch();
  // const { start, end } = useSelector((state) => state.search.date);
  // const today = new Date().getDate();

  // const [selectedDate, setSelectedDate] = useState({
  //   start: start || new Date(new Date().setDate(today + 7)),
  //   end: end || new Date(new Date().setDate(today + 13)),
  // });

  // const handleChangeSelectedData = function (event) {
  //   setSelectedDate({
  //     start: event[0].$d.toString(),
  //     end: event[1].$d.toString(),
  //   });
  // };

  // const handleSaveDateAndCloseModal = function () {
  //   reduxDispatch(
  //     searchQueryActions.setDateSearch({
  //       start: selectedDate.start.toString(),
  //       end: selectedDate.end.toString(),
  //     })
  //   );
  //   onCloseModal();
  // };

  const {
    datePicker,
    datePicker__Head,
    datePicker__Body,
    datePicker__Head__CloseBtn,
    datePicker__Head__Heading,
  } = styles;
  return (
    <>
      <div className={`${datePicker} `}>
        <div className={datePicker__Head}>
          <h3 className={datePicker__Head__Heading}>Change Date</h3>
          <button
            className={datePicker__Head__CloseBtn}
            onClick={onSaveDateAndCloseModal}
          >
            <CloseIcon />
          </button>
        </div>
        <div className={`${datePicker__Body} smallerScreenSearchDate`}>
          <DateRangePicker
            getPopupContainer={(node) => node.parentElement}
            open={true}
            value={[dayjs(startDate), dayjs(endData)]}
            onChange={onChangeSelectedData}
            //className={datePicker__Body}
          />
        </div>
      </div>
      {createPortal(
        <Overlay zIndex={1200} onClick={onSaveDateAndCloseModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default DatePickerModal;
