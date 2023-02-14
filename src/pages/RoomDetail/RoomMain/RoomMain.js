import styles from "./RoomMain.module.scss";
import AboutRoom from "../AboutRoom/AboutRoom";
import BookingDetailAside from "../BookingDetailAside/BookingDetailAside";
import RoomFeature from "../RoomFeature/RoomFeature";
import RoomLocation from "../RoomLocation/RoomLocation";
import AboutHost from "../AboutHost/AboutHost";
import RoomMoreInfo from "../RoomMoreInfo/RoomMoreInfo";
import LineBreak from "../../../components/UI/Cosmetics/LineBreak/LineBreak";
import BookingDetailBottomNav from "../BookingDetailBottomNav/BookingDetailBottomNav";
import RoomTypesSelect from "../RoomTypesSelect/RoomTypesSelect";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

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
  className,
}) {
  const [selectedRooms, setSelectedRooms] = useState(
    lodgeInfo.types.map((type) => ({ ...type, quantity: 0 }))
  );

  const [isSmallerScreen, setIsSmallerScreen] = useState(false);
  const resizeObserverRef = useRef(null);
  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      if (entries[0].contentRect.width <= 744) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);
    return () => resizeObserverRef.current.disconnect();
  }, []);

  const {
    roomMain,
    roomMain__SmallerScreen,
    roomMain__LargerScreen,
    roomMain__Info,
    roomMain__Aside,
  } = styles;

  return (
    <div
      className={`${roomMain} ${
        isSmallerScreen ? roomMain__SmallerScreen : roomMain__LargerScreen
      } ${className}`}
    >
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
        <RoomLocation
          ref={locationRef}
          cityName={
            lodgeInfo.location.includes(",")
              ? lodgeInfo.city
              : lodgeInfo.location
          }
        />
        <LineBreak />
        <AboutHost ref={hostRef} hostInfo={lodgeInfo.host} />
        <LineBreak />
        {/* <RoomMoreInfo ref={rulesRef} /> */}
      </div>
      {!isSmallerScreen && (
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
      )}

      {isSmallerScreen &&
        createPortal(
          <BookingDetailBottomNav
            selectedRooms={selectedRooms}
            id={lodgeInfo.id}
            onScrollToRoomTypes={onScrollToElement.bind(null, roomTypesRef)}
            review={lodgeInfo.review}
            name={lodgeInfo.name}
            price={lodgeInfo.price}
            location={lodgeInfo.location}
            images={lodgeInfo.images}
          />,
          document.getElementById("modal-root")
        )}
    </div>
  );
};

export default RoomMain;
