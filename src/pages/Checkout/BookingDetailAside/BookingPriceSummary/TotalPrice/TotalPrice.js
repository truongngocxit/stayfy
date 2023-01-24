import styles from "./TotalPrice.module.scss";

const TotalPrice = function ({ price }) {
  const { totalPrice } = styles;
  return (
    <div className={totalPrice}>
      <span>Total (USD)</span>
      <span>${price.toFixed(2)}</span>
    </div>
  );
};

export default TotalPrice;
