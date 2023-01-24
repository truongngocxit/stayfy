import styles from "./BookingPriceSummary.module.scss";
import PriceItem from "./PriceItem/PriceItem";
import TotalPrice from "./TotalPrice/TotalPrice";
import LineBreak from "../../../../components/UI/Cosmetics/LineBreak/LineBreak";
const BookingPriceSummary = function ({ rooms }) {
  const { priceSummary, priceSummary__Items } = styles;
  return (
    <div className={priceSummary}>
      <h3>Price Details</h3>
      <div className={priceSummary__Items}>
        {rooms.map((room) => (
          <PriceItem key={room.title} name={room.title} price={room.price} />
        ))}
      </div>
      <LineBreak />
      <TotalPrice price="632.84" />
    </div>
  );
};

export default BookingPriceSummary;
