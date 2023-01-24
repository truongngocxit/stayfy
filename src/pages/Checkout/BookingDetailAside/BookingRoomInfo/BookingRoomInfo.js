import styles from "./BookingRoomInfo.module.scss";
import StarIcon from "../../../../components/UI/SVG/StartIcon";

const BookingRoomInfo = function ({ name, review, location, image }) {
  const {
    roomInfo,
    roomInfo__Image,
    roomInfo__Details,
    roomInfo__Details__Name,
    roomInfo__Details__Review,
    roomInfo__Details__Address,
  } = styles;
  return (
    <div className={roomInfo}>
      <div className={roomInfo__Image}>
        <img src={image} alt="sample room" />
      </div>
      <div className={roomInfo__Details}>
        <h3 className={roomInfo__Details__Name}>{name}</h3>
        <div className={roomInfo__Details__Review}>
          <StarIcon />
          <span>{review.toFixed(2)}</span>
        </div>
        <p className={roomInfo__Details__Address}>{location}</p>
      </div>
    </div>
  );
};

export default BookingRoomInfo;
