import styles from "./BookingInfoMain.module.scss";
import GuestInfoForm from "./GuestInfoForm/GuestInfoForm";
import ArrivalTimeForm from "./ArrivalTimeForm/ArrivalTimeForm";

const BookingInfo = function () {
  const { bookingInfo } = styles;
  return (
    <div className={bookingInfo}>
      <GuestInfoForm />
      <ArrivalTimeForm />
    </div>
  );
};

export default BookingInfo;
