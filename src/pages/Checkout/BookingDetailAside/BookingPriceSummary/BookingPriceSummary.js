import styles from "./BookingPriceSummary.module.scss";
import PriceItem from "./PriceItem/PriceItem";
import TotalPrice from "./TotalPrice/TotalPrice";
import LineBreak from "../../../../components/UI/Cosmetics/LineBreak/LineBreak";
const BookingPriceSummary = function ({ rooms }) {
  const { priceSummary, priceSummary__Items } = styles;
  const totalPrice = rooms.reduce(
    (total, curRoom) => total + Number(curRoom.price) * curRoom.quantity,
    0
  );
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
