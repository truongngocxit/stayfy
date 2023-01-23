import styles from "./RoomMain.module.scss";
import AboutRoom from "../AboutRoom/AboutRoom";
import BookingDetailAside from "../BookingDetailAside/BookingDetailAside";
import RoomFeature from "../RoomFeature/RoomFeature";
import RoomLocation from "../RoomLocation/RoomLocation";
import AboutHost from "../AboutHost/AboutHost";
import RoomMoreInfo from "../RoomMoreInfo/RoomMoreInfo";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";
import RoomTypesSelect from "../RoomTypesSelect/RoomTypesSelect";

const RoomMain = function ({
  stickyNavHeight,
  rulesRef,
  locationRef,
  aboutRef,
  facilitiesRef,
  hostRef,
  lodgeInfo,
}) {
  console.log(lodgeInfo);
  const { roomMain, roomMain__Info, roomMain__Aside } = styles;
  return (
    <div className={roomMain}>
      <div className={roomMain__Info}>
        <AboutRoom ref={aboutRef} description={lodgeInfo.description} />
        <LineBreak />
        <RoomFeature ref={facilitiesRef} amenities={lodgeInfo.amenities} />
        <LineBreak />
        <RoomTypesSelect types={lodgeInfo.types} />
        <LineBreak />
        <RoomLocation ref={locationRef} cityName={lodgeInfo.city} />
        <LineBreak />
        <AboutHost ref={hostRef} hostInfo={lodgeInfo.host} />
        <LineBreak />
        <RoomMoreInfo ref={rulesRef} />
      </div>
      <aside className={roomMain__Aside}>
        <BookingDetailAside stickyNavHeight={stickyNavHeight} />
      </aside>
    </div>
  );
};

export default RoomMain;
