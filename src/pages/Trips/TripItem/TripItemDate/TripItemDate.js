import styles from "./TripItemDate.module.scss";

const TripItemDate = function ({ className, date, isSmallerScreen }) {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString("en-us", { month: "short" });
  const day = dateObj.getDate();
  const {
    tripDate,
    tripDate__Smaller,
    tripDate__Larger,
    tripDate__Day,
    tripDate__Month,
    tripDate__Year,
  } = styles;
  return (
    <div
      className={`${tripDate} ${
        isSmallerScreen ? tripDate__Smaller : tripDate__Larger
      } ${className}`}
    >
      <span className={tripDate__Day}>{day}</span>
      <span className={tripDate__Month}>{month}</span>
      <span className={tripDate__Year}>{year}</span>
    </div>
  );
};

export default TripItemDate;
