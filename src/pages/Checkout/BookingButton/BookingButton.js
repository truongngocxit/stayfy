import styles from "./BookingButton.module.scss";
import { Tooltip } from "antd";
import { useContext } from "react";
import { guestGeneralInfoContext } from "../../../contexts/guestBookingInfoContext/guestGeneralInfoContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { railwayBackendURL } from "../../../utils/conts";
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

        const response = await axios({
          method: "POST",
          url: `${railwayBackendURL}add-booking`,
          data: {
            bookingData: data,
            userId: activeUserId,
          },
        });

        reduxDispatch(
          activeUserActions.addTrip({
            bookingId: response.data.bookingId,
            userTripId: response.data.tripId,
          })
        );

        onHasSubmitted();
        // reduxDispatch(bookingInfoActions.resetBookingInfo());
        // reduxDispatch(searchQueryActions.resetSearchQuery());
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
