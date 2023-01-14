import styles from "./PriceItem.module.scss";

const PriceItem = function ({ name, price }) {
  const { priceItem, priceItem__Name, priceItem__Price } = styles;
  return (
    <div className={priceItem}>
      <span className={priceItem__Name}>{name}</span>
      <span className={priceItem__Price}>${price}</span>
    </div>
  );
};

export default PriceItem;
