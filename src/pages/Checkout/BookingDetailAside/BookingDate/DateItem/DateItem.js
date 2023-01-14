import styles from "./DateItem.module.scss";

const DateItem = function ({ tag, date, time }) {
  const { dateItem, dateItem__Tag, dateItem__Date, dateItem__Time } = styles;
  return (
    <div className={dateItem}>
      <span className={dateItem__Tag}>{tag}</span>
      <span className={dateItem__Date}>{date}</span>
      <span className={dateItem__Time}>{time}</span>
    </div>
  );
};

export default DateItem;
