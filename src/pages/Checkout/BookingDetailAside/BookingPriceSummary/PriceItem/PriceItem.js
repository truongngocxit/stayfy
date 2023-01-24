import styles from "./PriceItem.module.scss";

const PriceItem = function ({ name, price, quantity }) {
  const { priceItem, priceItem__Name, priceItem__Price } = styles;
  return (
    <div className={priceItem}>
      <span className={priceItem__Name}>
        {name} x {quantity}
      </span>
      <span className={priceItem__Price}>${price * quantity}</span>
    </div>
  );
};

export default PriceItem;
