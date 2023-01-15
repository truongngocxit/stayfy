import styles from "./TripItem.module.scss";
import CalendarIcon from "../../../components/UI/SVG/CalendarIcon";
import LocationIcon from "../../../components/UI/SVG/LocationIcon";

const TripItem = function () {
  const {
    tripItem,
    tripItem__Date,
    tripItem__Date__Day,
    tripItem__Date__Month,
    tripItem__Date__Year,
    tripItem__Info,
    tripItem__Info__Tag,
    tripItem__Info__Image,
    tripItem__Info__Details,
    tripItem__Info__Details__Heading,
    tripItem__Info__Details__Item,
  } = styles;
  return (
    <div className={tripItem}>
      <div className={tripItem__Date}>
        <span className={tripItem__Date__Day}>19</span>
        <span className={tripItem__Date__Month}>Jan</span>
        <span className={tripItem__Date__Year}>2022</span>
      </div>
      <div className={tripItem__Info}>
        <div className={tripItem__Info__Tag}>Booked for you</div>
        <div className={tripItem__Info__Image}>
          <img
            src="https://a0.muscache.com/im/pictures/0adc1aec-bd6f-4f10-8536-a3bb6faecd20.jpg?im_w=720"
            alt="sample landscape"
          />
        </div>
        <div className={tripItem__Info__Details}>
          <h3 className={tripItem__Info__Details__Heading}>
            Deluxe Bungalow Valley View
          </h3>
          <p className={tripItem__Info__Details__Item}>
            <CalendarIcon />
            <span>Sapa, Lao Cai</span>
          </p>
          <p className={tripItem__Info__Details__Item}>
            <LocationIcon />
            <span>Oct 2 - 7</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripItem;
