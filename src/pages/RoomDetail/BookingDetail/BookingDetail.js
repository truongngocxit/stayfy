import styles from "./BookingDetail.module.scss";
import StarIcon from "../../../components/UI/SVG/StartIcon";
import DateRangePicker from "../../../components/DateRangePicker/DateRangePicker";
import ChevronTop from "../../../components/UI/SVG/ChevronTopIcon";
import GuestNumberDropdown from "../../../components/SearchBar/GuestNumberDropdown/GuestNumberDropdown";
import useDropdown from "../../../custom-hooks/useDropdown";
import { useState } from "react";

const BookingDetail = function ({ stickyNavHeight }) {
  const [datePickerIsActive, setDatePickerIsActive] = useState(false);

  const { dropdownIsVisible, dropdownRef, handleOpenDropdown } = useDropdown();

  const handleDatePickerFocus = function () {
    setDatePickerIsActive(true);
  };

  const handleDatePickerBlur = function () {
    setDatePickerIsActive(false);
  };

  const {
    bookingDetail,
    bookingDetail__Head,
    bookingDetail__Btn,
    bookingDetail__Fee,
    bookingDetail__Info,
    bookingDetail__Info_GuestNum,
    bookingDetail__Info_GuestNum_Active,
    bookingDetail__Info_GuestNum_DropdownBtn,
    bookingDetail__Info_DatePicker,
    bookingDetail__Info_DatePicker_Active,
    bookingDetail__Head_Price,
    bookingDetail__Head_Review,
  } = styles;
  return (
    <div className={bookingDetail} style={{ top: `${40 + stickyNavHeight}px` }}>
      <div className={bookingDetail__Head}>
        <div className={bookingDetail__Head_Price}>
          <span>
            <strong>$21</strong>
          </span>
          <span>night</span>
        </div>
        <div className={bookingDetail__Head_Review}>
          <StarIcon />
          <span>4.90</span>
        </div>
      </div>

      <div className={bookingDetail__Info}>
        <div
          className={`${bookingDetail__Info_DatePicker} ${
            datePickerIsActive ? bookingDetail__Info_DatePicker_Active : ""
          }`}
        >
          <DateRangePicker
            onFocus={handleDatePickerFocus}
            onBlur={handleDatePickerBlur}
          />
        </div>

        <button
          className={`${bookingDetail__Info_GuestNum} ${
            dropdownIsVisible ? bookingDetail__Info_GuestNum_Active : ""
          }`}
          ref={dropdownRef}
          onClick={handleOpenDropdown}
        >
          <span>6 guests</span>

          <ChevronTop className={bookingDetail__Info_GuestNum_DropdownBtn} />
          {dropdownIsVisible && (
            <GuestNumberDropdown
              style={{
                width: "150%",
                left: "-155%",
                transform: "translateY(50%)",
              }}
            />
          )}
        </button>
      </div>
      <div className={bookingDetail__Fee}>
        <span>Total before taxes</span>
        <span>$71</span>
      </div>
      <button className={bookingDetail__Btn}>Reserve</button>
    </div>
  );
};

export default BookingDetail;
