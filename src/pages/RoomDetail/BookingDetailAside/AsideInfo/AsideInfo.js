import styles from "./AsideInfo.module.scss";
import DateRangePicker from "../../../../components/DateRangePicker/DateRangePicker";
import GuestNumberDropdown from "../../../../components/SearchBar/GuestNumberDropdown/GuestNumberDropdown";
import useDropdown from "../../../../custom-hooks/useDropdown";
import ChevronTopIcon from "../../../../components/UI/SVG/ChevronTopIcon";
import useGuestNum from "../../../../custom-hooks/useGuestNum";
import { useDispatch } from "react-redux";
import { searchQueryActions } from "../../../../redux-store/searchQuerySlice";
import { useState } from "react";
import dayjs from "dayjs";

const AsideInfo = function ({
  className,
  startDate,
  endDate,
  onChangeDate,
  reduxAdults,
  reduxChildren,
  reduxBabies,
  reduxAnimals,
}) {
  const [datePickerIsActive, setDatePickerIsActive] = useState(false);

  const adultsNumData = useGuestNum(7, reduxAdults || 1);
  const childrenNumData = useGuestNum(7, reduxChildren || 0);
  const babiesNumData = useGuestNum(5, reduxBabies || 0);
  const animalsNumData = useGuestNum(3, reduxAnimals || 0);

  const reduxDispatch = useDispatch();

  const handleDatePickerFocus = function () {
    setDatePickerIsActive(true);
  };

  const handleDatePickerBlur = function () {
    setDatePickerIsActive(false);
  };

  const { guestNum: localAdults, setGuestNum: setLocalAdults } = adultsNumData;
  const { guestNum: localChildren, setGuestNum: setLocalChildren } =
    childrenNumData;
  const { guestNum: localBabies, setGuestNum: setLocalBabies } = babiesNumData;
  const { guestNum: localAnimals, setGuestNum: setLocalAnimals } =
    animalsNumData;

  const handleResetLocalGuestNum = function () {
    setLocalAdults(reduxAdults);
    setLocalChildren(reduxChildren);
    setLocalBabies(reduxBabies);
    setLocalAnimals(reduxAnimals);
  };

  const {
    dropdownIsVisible,
    dropdownRef,
    containerRef,
    handleOpenDropdown,
    handleCloseDropdown,
  } = useDropdown(handleResetLocalGuestNum);

  const {
    asideInfo,
    asideInfo__DatePicker,
    asideInfo__DatePicker__Active,
    asideInfo__GuestNum,
    asideInfo__GuestNum__Active,
    asideInfo__GuestNum__Modal,
    asideInfo__GuestNum__DropdownBtn,
  } = styles;

  const handleAddGuestNum = function () {
    reduxDispatch(
      searchQueryActions.setGuestNum({
        adults: localAdults,
        children: localChildren,
        babies: localBabies,
        animal: localAnimals,
      })
    );

    handleCloseDropdown();
  };

  let guestLabel;

  if (reduxAdults === 1) {
    guestLabel = "1 guest";
  } else {
    guestLabel = `${reduxAdults + reduxChildren} guests`;
  }

  if (dropdownIsVisible && localAdults === 1) {
    guestLabel = "1 guest";
  } else if (dropdownIsVisible && localAdults > 1) {
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
            className={asideInfo__GuestNum__Modal}
            adultsData={adultsNumData}
            childrenData={childrenNumData}
            babiesData={babiesNumData}
            animalsData={animalsNumData}
            onOk={handleAddGuestNum}
          />
        )}
      </div>
    </div>
  );
};

export default AsideInfo;
