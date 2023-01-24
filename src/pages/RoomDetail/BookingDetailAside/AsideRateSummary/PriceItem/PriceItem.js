import styles from "./PriceItem.module.scss";

const PriceItem = function ({ title, quantity, price }) {
  const { priceItem, priceItem__Label, priceItem__Price } = styles;
  return (
    <li className={priceItem}>
      <span className={priceItem__Label}>
        {title} x {quantity}
      </span>
      <span className={priceItem__Price}>${price * quantity}</span>
    </li>
  );
};

export default PriceItem;
