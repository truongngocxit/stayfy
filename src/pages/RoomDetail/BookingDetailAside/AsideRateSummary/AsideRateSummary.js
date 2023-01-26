import styles from "./AsideRateSummary.module.scss";
import PriceItem from "./PriceItem/PriceItem";

const AsideRateSummary = function ({ numOfDays, price, selectedRooms }) {
  const totalPrice = selectedRooms.reduce(
    (totalPrice, currentRoom) =>
      totalPrice + Number(currentRoom.price) * currentRoom.quantity,
    0
  );
  const { rateSummary, rateSummary__Items, rateSummary__Total } = styles;
  return (
    <div className={rateSummary}>
      <ul className={rateSummary__Items}>
        {selectedRooms.map((room) => {
          if (room.quantity > 0) {
            return (
              <PriceItem
                key={room.id}
                title={room.name}
                quantity={room.quantity}
                price={room.price}
              />
            );
          }
          return null;
        })}
      </ul>
      <div className={rateSummary__Total}>
        <span>Total</span>
        <span>${(totalPrice * numOfDays).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default AsideRateSummary;
