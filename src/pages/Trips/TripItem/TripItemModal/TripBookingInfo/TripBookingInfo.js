import styles from "./TripBookingInfo.module.scss";
import DateItem from "../../../../Checkout/BookingDetailAside/BookingDate/DateItem/DateItem";
import LineBreak from "../../../../../components/UI/Cosmetics/LineBreak/LineBreak";
import PriceItem from "../../../../Checkout/BookingDetailAside/BookingPriceSummary/PriceItem/PriceItem";
import TotalPrice from "../../../../Checkout/BookingDetailAside/BookingPriceSummary/TotalPrice/TotalPrice";

const TripBookingInfo = function () {
  const {
    bookingInfo,
    bookingInfo__Date,
    bookingInfo__Guests,
    bookingInfo__Guests__Label,
    bookingInfo__Guests__Num,
    bookingInfo__Price,
    bookingInfo__Price__Items,
  } = styles;
  return (
    <div className={bookingInfo}>
      <div className={bookingInfo__Date}>
        <DateItem tag="IN" date={"Mon, Feb 06, 2023"} time="13:00 – 23:30" />
        <DateItem tag="OUT" date={"Sun, Feb 12, 2023"} time="Until 12:00" />
      </div>
      <LineBreak />
      <div className={bookingInfo__Guests}>
        <span className={bookingInfo__Guests__Label}>Guests</span>
        <span className={bookingInfo__Guests__Num}>1 guest</span>
      </div>
      <LineBreak />
      <div className={bookingInfo__Price}>
        <h3>Price Details</h3>
        <div className={bookingInfo__Price__Items}>
          <PriceItem name="Entire house" price={25.5} quantity={5} />
          <PriceItem name="Entire house" price={25.5} quantity={5} />
          <PriceItem name="Entire house" price={25.5} quantity={5} />
        </div>
      </div>
      <LineBreak />
      <TotalPrice price={100} />
    </div>
  );
};

export default TripBookingInfo;
