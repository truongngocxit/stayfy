import styles from "./AsideInfo.module.scss";
import DateRangePicker from "../../../../components/DateRangePicker/DateRangePicker";
import GuestNumberDropdown from "../../../../components/SearchBar/GuestNumberDropdown/GuestNumberDropdown";
import useDropdown from "../../../../custom-hooks/useDropdown";
import ChevronTopIcon from "../../../../components/UI/SVG/ChevronTopIcon";
import useGuestNum from "../../../../custom-hooks/useGuestNum";
import { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const AsideInfo = function ({
  className,
  startDate,
  endDate,
  onChangeDate,
  adultsNumData,
  childrenNumData,
  babiesNumData,
  animalsNumData,
}) {
  const [datePickerIsActive, setDatePickerIsActive] = useState(false);
  const { dropdownIsVisible, dropdownRef, containerRef, handleOpenDropdown } =
    useDropdown();

  const handleDatePickerFocus = function () {
    setDatePickerIsActive(true);
  };

  const handleDatePickerBlur = function () {
    setDatePickerIsActive(false);
  };

  const { guestNum: localAdults } = adultsNumData;
  const { guestNum: localChildren } = childrenNumData;
  const { guestNum: localBabies } = babiesNumData;
  const { guestNum: localAnimals } = animalsNumData;

  const {
    asideInfo,
    asideInfo__DatePicker,
    asideInfo__DatePicker__Active,
    asideInfo__GuestNum,
    asideInfo__GuestNum__Active,
    asideInfo__GuestNum__DropdownBtn,
  } = styles;

  let guestLabel;

  if (localAdults === 0) {
    guestLabel = "Add guests";
  } else if (localAdults === 1) {
    guestLabel = "1 guest";
  } else {
    guestLabel = `${localAdults + localChildren} guests`;
  }

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
          value={[
            startDate ? dayjs(startDate) : null,
            endDate ? dayjs(endDate) : null,
          ]}
          onChange={onChangeDate}
        />
      </div>

      <div
        className={`${asideInfo__GuestNum} ${
          dropdownIsVisible ? asideInfo__GuestNum__Active : ""
        }`}
        onClick={handleOpenDropdown}
        ref={containerRef}
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
