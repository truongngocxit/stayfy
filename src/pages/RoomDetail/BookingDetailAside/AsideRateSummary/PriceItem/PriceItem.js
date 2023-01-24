import styles from "./PriceItem.module.scss";

const PriceItem = function ({ title, price }) {
  const { priceItem, priceItem__Label, priceItem__Price } = styles;
  return (
    <li className={priceItem}>
      <span className={priceItem__Label}>{title} x 1</span>
      <span className={priceItem__Price}>${price}</span>
    </li>
  );
};

export default PriceItem;
