import styles from "./AsideRateSummary.module.scss";
import PriceItem from "./PriceItem/PriceItem";

const AsideRateSummary = function ({ numOfDays, price, selectedRooms }) {
  console.log(selectedRooms);
  const totalPrice = selectedRooms.reduce(
    (totalPrice, currentRoom) => totalPrice + Number(currentRoom.price),
    0
  );
  const { rateSummary, rateSummary__Items, rateSummary__Total } = styles;
  return (
    <div className={rateSummary}>
      <ul className={rateSummary__Items}>
        {selectedRooms.map((room) => (
          <PriceItem title={room.title} price={room.price} />
        ))}
      </ul>
      <div className={rateSummary__Total}>
        <span>Total</span>
        <span>${(totalPrice * numOfDays).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default AsideRateSummary;
