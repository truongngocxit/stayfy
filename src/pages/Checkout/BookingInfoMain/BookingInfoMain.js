import styles from "./BookingInfoMain.module.scss";
import GuestInfoForm from "./GuestInfoForm/GuestInfoForm";
import ArrivalTimeForm from "./ArrivalTimeForm/ArrivalTimeForm";
import SpecialRequestForm from "./SpecialRequestForm/SpecialRequestForm";
import HouseRules from "./GuestInfoForm/HouseRules/HouseRules";

const BookingInfo = function ({ className }) {
  const { bookingInfo } = styles;
  return (
    <div className={`${bookingInfo} ${className || ""}`}>
      <GuestInfoForm />
      <ArrivalTimeForm />
      <SpecialRequestForm />
      <HouseRules />
    </div>
  );
};

export default BookingInfo;
