import styles from "./AsideRateSummary.module.scss";

const AsideRateSummary = function ({ numOfDays, price }) {
  const { rateSummary } = styles;
  return (
    <div className={rateSummary}>
      <span>
        ${price} x {numOfDays}
      </span>
      <span>${price * numOfDays}</span>
    </div>
  );
};

export default AsideRateSummary;
