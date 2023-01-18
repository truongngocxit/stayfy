import styles from "./AsideRateSummary.module.scss";

const AsideRateSummary = function () {
  const { rateSummary } = styles;
  return (
    <div className={rateSummary}>
      <span>Total before taxes</span>
      <span>$71</span>
    </div>
  );
};

export default AsideRateSummary;
