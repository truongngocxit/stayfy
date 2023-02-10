import styles from "./BookingButton.module.scss";
import { Tooltip } from "antd";
import { useContext } from "react";
import { guestGeneralInfoContext } from "../../../contexts/guestBookingInfoContext/guestGeneralInfoContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bookingInfoActions } from "../../../redux-store/bookingInfoSlice";
import { searchQueryActions } from "../../../redux-store/searchQuerySlice";
import { activeUserActions } from "../../../redux-store/activeUserSlice";

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

  const activeUserId = useSelector((state) => state.activeUser.id);
  const reduxDispatch = useDispatch();

  const {
    id: roomId,
    name,
    date,
    rooms,
    guests,
  } = useSelector((state) => state.bookingInfo.roomInfo);

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
        date: new Date().toString(),
        roomInfo: {
          roomId,
          name,
          rooms,
          date,
          guests,
        },
        guestInfo: {
          userId: activeUserId,
          firstName,
          lastName,
          email,
          phone,
          bookedFor,
        },
      };
      const sendBookingData = async function () {
        onSubmitting();

        const bookingResponse = await axios({
          method: "POST",
          url: "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json",
          data,
        });

        const newBookingId = bookingResponse.data.name;

        const tripResponse = await axios({
          method: "POST",
          url: `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users/${activeUserId}/upcomingTrips.json`,
          data: { bookingId: newBookingId },
        });

        reduxDispatch(
          activeUserActions.addTrip({
            bookingId: newBookingId,
            userTripId: tripResponse.data.name,
          })
        );

        const response = await axios({
          method: "POST",
          url: "https://stayfy-backend.onrender.com/add-booking",
          data: {
            bookingData: data,
            userId: activeUserId,
          },
        });

        console.log(response.data);

        setTimeout(() => {
          onHasSubmitted();
          reduxDispatch(bookingInfoActions.resetBookingInfo());
          reduxDispatch(searchQueryActions.resetSearchQuery());
        }, 2500);
      };
      sendBookingData();
    } else {
    }
  };

  const { bookingBtn, bookingBtn__Disabled } = styles;
  return (
    <div
      className={`${bookingBtn} ${
        submittedInfoIsInvalid ? bookingBtn__Disabled : ""
      } ${className || ""}`}
      onClick={handleSubmitBookingInfo}
    >
      <Tooltip
        title="Please fill the form ↑"
        open={submittedInfoIsInvalid}
        getPopupContainer={(node) => node.parentElement}
      >
        {text}
      </Tooltip>
    </div>
  );
};

export default BookingButton;
