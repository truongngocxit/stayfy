import styles from "./AsideInfo.module.scss";
import DateRangePicker from "../../../../components/DateRangePicker/DateRangePicker";
import GuestNumberDropdown from "../../../../components/SearchBar/GuestNumberDropdown/GuestNumberDropdown";
import useDropdown from "../../../../custom-hooks/useDropdown";
import ChevronTopIcon from "../../../../components/UI/SVG/ChevronTopIcon";
import useGuestNum from "../../../../custom-hooks/useGuestNum";
import { useState } from "react";
import { useSelector } from "react-redux";

const AsideInfo = function ({ className }) {
  const [datePickerIsActive, setDatePickerIsActive] = useState(false);
  const { dropdownIsVisible, dropdownRef, handleOpenDropdown } = useDropdown();

  const { adults, children, babies, animals } = useSelector(
    (state) => state.search.guestNum
  );

  const adultsNumData = useGuestNum(7, adults || 1);
  const childrenNumData = useGuestNum(7, children || 0);
  const babiesNumData = useGuestNum(5, babies || 0);
  const animalsNumData = useGuestNum(3, animals || 0);

  const handleDatePickerFocus = function () {
    setDatePickerIsActive(true);
  };

  const handleDatePickerBlur = function () {
    setDatePickerIsActive(false);
  };

  const {
    asideInfo,
    asideInfo__DatePicker,
    asideInfo__DatePicker__Active,
    asideInfo__GuestNum,
    asideInfo__GuestNum__Active,
    asideInfo__GuestNum__DropdownBtn,
  } = styles;

  let guestLabel = "Add guests";

  return (
    <div className={`${asideInfo} ${className}`}>
      <div
        className={`${asideInfo__DatePicker} ${
          datePickerIsActive ? asideInfo__DatePicker__Active : ""
        }`}
      >
        <DateRangePicker
          onFocus={handleDatePickerFocus}
          onBlur={handleDatePickerBlur}
        />
      </div>

      <div
        className={`${asideInfo__GuestNum} ${
          dropdownIsVisible ? asideInfo__GuestNum__Active : ""
        }`}
        ref={dropdownRef}
        onClick={handleOpenDropdown}
      >
        <span>{guestLabel}</span>

        <ChevronTopIcon className={asideInfo__GuestNum__DropdownBtn} />
        {dropdownIsVisible && (
          <GuestNumberDropdown
            style={{
              width: "150%",
              left: "-155%",
              transform: "translateY(50%)",
            }}
            adultsData={adultsNumData}
            childrenData={childrenNumData}
            babiesData={babiesNumData}
            animalsData={animalsNumData}
          />
        )}
      </div>
    </div>
  );
};

export default AsideInfo;
