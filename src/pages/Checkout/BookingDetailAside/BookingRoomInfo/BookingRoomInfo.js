import styles from "./BookingRoomInfo.module.scss";
import StarIcon from "../../../../components/UI/SVG/StarIcon";

const BookingRoomInfo = function ({ name, review, location, image }) {
  return (
    <div className={roomInfo}>
      <div className={roomInfo__Image}>
        <img src={image} alt="Room preview pic" />
      </div>
      <div className={roomInfo__Details}>
        <h3 className={roomInfo__Name}>{name}</h3>
        <div className={roomInfo__Review}>
          <StarIcon />
          <span>{Number(review).toFixed(2)}</span>
        </div>
        <p className={roomInfo__Address}>{location}</p>
      </div>
    </div>
  );
};

export default BookingRoomInfo;

const {
  roomInfo,
  roomInfo__Image,
  roomInfo__Details,
  roomInfo__Name,
  roomInfo__Review,
  roomInfo__Address,
} = styles;
