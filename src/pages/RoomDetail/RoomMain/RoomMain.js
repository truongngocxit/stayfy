import styles from "./RoomMain.module.scss";
import AboutRoom from "../AboutRoom/AboutRoom";
import BookingDetail from "../BookingDetail/BookingDetail";
import RoomFeature from "../RoomFeature/RoomFeature";

const RoomMain = function () {
  const { roomMain, roomMain__Info, roomMain__Aside } = styles;
  return (
    <div className={roomMain}>
      <div className={roomMain__Info}>
        <AboutRoom />
        <RoomFeature />
      </div>
      <aside className={roomMain__Aside}>
        <BookingDetail />
      </aside>
    </div>
  );
};

export default RoomMain;
