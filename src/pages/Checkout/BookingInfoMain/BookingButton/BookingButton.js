import styles from "./BookingButton.module.scss";
import { useSelector } from "react-redux";
import { Tooltip } from "antd";
import { useContext } from "react";
import { guestGeneralInfoContext } from "../../../../contexts/guestBookingInfoContext/guestGeneralInfoContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { bookingInfoActions } from "../../../../redux-store/bookingInfoSlice";
import { searchQueryActions } from "../../../../redux-store/searchQuerySlice";

const BookingButton = function ({
  text,
  className,
  onSubmitting,
  onHasSubmitted,
}) {
  const {
    firstNameInput,
    lastNameInput,
    emailInput,
    phoneInput,
    bookedForInput,
  } = useContext(guestGeneralInfoContext);

  const reduxDispatch = useDispatch();

  const { id, name, date, rooms } = useSelector(
    (state) => state.bookingInfo.roomInfo
  );

  const { input: firstName, inputIsInvalid: firstNameIsInvalid } =
    firstNameInput;
  const { input: lastName, inputIsInvalid: lastNameIsInvalid } = lastNameInput;
  const { input: email, inputIsInvalid: emailIsInvalid } = phoneInput;
  const { input: phone, inputIsInvalid: phoneIsInvalid } = emailInput;
  const { input: bookedFor } = bookedForInput;

  const submittedInfoIsInvalid =
    firstNameIsInvalid || lastNameIsInvalid || emailIsInvalid || phoneIsInvalid;

  const handleSubmitBookingInfo = function () {
    if (!submittedInfoIsInvalid) {
      const data = {
        roomInfo: {
          roomId: id,
          name,
          rooms,
          date,
        },
        guestInfo: {
          firstName,
          lastName,
          email,
          phone,
          bookedFor,
        },
      };
      const sendBookingData = async function () {
        onSubmitting();

        const response = await axios({
          method: "POST",
          url: "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json",
          data,
        });

        setTimeout(() => {
          onHasSubmitted();
          reduxDispatch(bookingInfoActions.resetBookingInfo());
          reduxDispatch(searchQueryActions.resetSearchQuery());
        }, 5000);
      };
      sendBookingData();
    } else {
    }
  };

  const { bookingBtn, bookingBtn__Disabled } = styles;
  return (
    <Tooltip title="Please fill the form ↑" open={submittedInfoIsInvalid}>
      <div
        className={`${bookingBtn} ${
          submittedInfoIsInvalid ? bookingBtn__Disabled : ""
        } ${className}`}
        onClick={handleSubmitBookingInfo}
      >
        {text}
      </div>
    </Tooltip>
  );
};

export default BookingButton;
