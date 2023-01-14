import styles from "./BookingRoomInfo.module.scss";
import StarIcon from "../../../../components/UI/SVG/StartIcon";

const BookingRoomInfo = function () {
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
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-709029553824546972/original/99c32ee2-4e21-4260-8a44-eca1668b44a0.jpeg?im_w=1200"
          alt="sample room"
        />
      </div>
      <div className={roomInfo__Details}>
        <h3 className={roomInfo__Details__Name}>
          La Maison - Starry night @ Double Attic
        </h3>
        <div className={roomInfo__Details__Review}>
          <StarIcon />
          <span>4.5</span>
        </div>
        <p className={roomInfo__Details__Address}>Sa Pa, Lao Cai, Vietname</p>
      </div>
    </div>
  );
};

export default BookingRoomInfo;
