import styles from "./RoomMain.module.scss";
import AboutRoom from "../AboutRoom/AboutRoom";
import BookingDetailAside from "../BookingDetailAside/BookingDetailAside";
import RoomFeature from "../RoomFeature/RoomFeature";
import RoomLocation from "../RoomLocation/RoomLocation";
import AboutHost from "../AboutHost/AboutHost";
import RoomMoreInfo from "../RoomMoreInfo/RoomMoreInfo";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";
import RoomTypesSelect from "../RoomTypesSelect/RoomTypesSelect";
import { useState } from "react";

const RoomMain = function ({
  stickyNavHeight,
  rulesRef,
  locationRef,
  aboutRef,
  facilitiesRef,
  hostRef,
  lodgeInfo,
  roomTypesRef,
  onScrollToElement,
}) {
  const [selectedRooms, setSelectedRooms] = useState(
    lodgeInfo.types.map((type) => ({ ...type, quantity: 0 }))
  );

  const { roomMain, roomMain__Info, roomMain__Aside } = styles;

  return (
    <div className={roomMain}>
      <div className={roomMain__Info}>
        <AboutRoom ref={aboutRef} description={lodgeInfo.description} />
        <LineBreak />
        <RoomFeature ref={facilitiesRef} amenities={lodgeInfo.amenities} />
        <LineBreak />
        <RoomTypesSelect
          types={lodgeInfo.types}
          ref={roomTypesRef}
          onSelectTypes={setSelectedRooms}
          selectedRooms={selectedRooms}
        />
        <LineBreak />
        <RoomLocation ref={locationRef} cityName={lodgeInfo.city} />
        <LineBreak />
        <AboutHost ref={hostRef} hostInfo={lodgeInfo.host} />
        <LineBreak />
        <RoomMoreInfo ref={rulesRef} />
      </div>
      <aside className={roomMain__Aside}>
        <BookingDetailAside
          stickyNavHeight={stickyNavHeight}
          review={lodgeInfo.review}
          name={lodgeInfo.name}
          price={lodgeInfo.price}
          location={lodgeInfo.location}
          images={lodgeInfo.images}
          id={lodgeInfo.id}
          onScrollToRoomTypes={onScrollToElement.bind(null, roomTypesRef)}
          selectedRooms={selectedRooms}
        />
      </aside>
    </div>
  );
};

export default RoomMain;
