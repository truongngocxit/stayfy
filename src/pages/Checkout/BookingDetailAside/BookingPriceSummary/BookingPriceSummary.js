import styles from "./BookingPriceSummary.module.scss";
import PriceItem from "./PriceItem/PriceItem";
import TotalPrice from "./TotalPrice/TotalPrice";
import LineBreak from "../../../../components/UI/Cosmetics/LineBreak/LineBreak";
const BookingPriceSummary = function () {
  const { priceSummary, priceSummary__Items } = styles;
  return (
    <div className={priceSummary}>
      <h3>Price Details</h3>
      <div className={priceSummary__Items}>
        <PriceItem name="$40.67 x 15 nights" price="610.00" />
        <PriceItem name="Weekly discount" price="61.00" />
        <PriceItem name="Cleaning fee" price="5.55" />
        <PriceItem name="Service fee" price="78.29" />
      </div>
      <LineBreak />
      <TotalPrice price="632.84" />
    </div>
  );
};

export default BookingPriceSummary;
