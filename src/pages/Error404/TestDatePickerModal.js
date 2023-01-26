import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const DateAdjustModal = function () {
  return (
    <div className="modal">
      <RangePicker
        open={true}
        getPopupContainer={(popup) => popup.parentNode}
        popupClassName="popup"
      />
    </div>
  );
};

export default DateAdjustModal;
