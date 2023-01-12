import styles from "./RoomMain.module.scss";
import AboutRoom from "../AboutRoom/AboutRoom";
import BookingDetail from "../BookingDetail/BookingDetail";
import RoomFeature from "../RoomFeature/RoomFeature";
import RoomLocation from "../RoomLocation/RoomLocation";
import AboutHost from "../AboutHost/AboutHost";
import RoomMoreInfo from "../RoomMoreInfo/RoomMoreInfo";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";

const RoomMain = function ({
  stickyNavHeight,
  rulesRef,
  locationRef,
  aboutRef,
  facilitiesRef,
  hostRef,
}) {
  const { roomMain, roomMain__Info, roomMain__Aside } = styles;
  return (
    <div className={roomMain}>
      <div className={roomMain__Info}>
        <AboutRoom ref={aboutRef} />
        <LineBreak />
        <RoomFeature ref={facilitiesRef} />
        <LineBreak />
        <RoomLocation ref={locationRef} />
        <LineBreak />
        <AboutHost ref={hostRef} />
        <LineBreak />
        <RoomMoreInfo ref={rulesRef} />
      </div>
      <aside className={roomMain__Aside}>
        <BookingDetail stickyNavHeight={stickyNavHeight} />
      </aside>
    </div>
  );
};

export default RoomMain;
