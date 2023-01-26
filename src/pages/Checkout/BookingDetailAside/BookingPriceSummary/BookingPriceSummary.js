import styles from "./BookingPriceSummary.module.scss";
import PriceItem from "./PriceItem/PriceItem";
import TotalPrice from "./TotalPrice/TotalPrice";
import LineBreak from "../../../../components/UI/Cosmetics/LineBreak/LineBreak";
import { useSelector } from "react-redux";
const BookingPriceSummary = function ({ rooms }) {
  const { priceSummary, priceSummary__Items } = styles;
  const { start: startDate, end: endDate } = useSelector(
    (state) => state.bookingInfo.roomInfo.date
  );

  const totalPrice =
    (rooms.reduce(
      (total, curRoom) => total + Number(curRoom.price) * curRoom.quantity,
      0
    ) *
      (new Date(endDate) - new Date(startDate))) /
    1000 /
    60 /
    60 /
    24;
  return (
    <div className={priceSummary}>
      <h3>Price Details</h3>
      <div className={priceSummary__Items}>
        {rooms.map((room) => {
          if (room.quantity > 0) {
            return (
              <PriceItem
                key={room.name}
                name={room.name}
                price={room.price}
                quantity={room.quantity}
              />
            );
          }
          return null;
        })}
      </div>
      <LineBreak />
      <TotalPrice price={totalPrice} />
    </div>
  );
};

export default BookingPriceSummary;
