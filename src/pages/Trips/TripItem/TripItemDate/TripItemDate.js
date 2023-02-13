import styles from "./TripItemDate.module.scss";

const TripItemDate = function ({ className, date, isSmallerScreen }) {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString("en-us", { month: "short" });
  const day = dateObj.getDate();

  return (
    <div
      className={`${tripDate} ${
        isSmallerScreen ? tripDateSmaller : tripDateLarger
      } ${className}`}
    >
      <span className={tripDate__Day}>{day}</span>
      <span className={tripDate__Month}>{month}</span>
      <span className={tripDate__Year}>{year}</span>
    </div>
  );
};

export default TripItemDate;

const {
  tripDate,
  ["tripDate--Smaller"]: tripDateSmaller,
  ["tripDate--Larger"]: tripDateLarger,
  tripDate__Day,
  tripDate__Month,
  tripDate__Year,
} = styles;
