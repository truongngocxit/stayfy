import styles from "./RoomTypesSelect.module.scss";
import RoomType from "./RoomType/RoomType";
import ChevronLeftIcon from "../../../components/UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../../../components/UI/SVG/ChevronRightIcon";
import { useRef, useState, useEffect } from "react";

const RoomTypes = function ({ types }) {
  const roomTypesRef = useRef(null);
  const intersectionObserverRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
  const [rightBtnIsVisible, setRightBtnIsVisible] = useState(false);

  const handleSlideRight = function () {
    roomTypesRef.current.scrollBy({
      left: roomTypesRef.current.getBoundingClientRect().width / 2,
      behavior: "smooth",
    });
  };

  const handleSlideLeft = function () {
    roomTypesRef.current.scrollBy({
      left: -(roomTypesRef.current.getBoundingClientRect().width / 2),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observerCallback = function (entries) {
      entries.forEach((entry) => {
        if (entry.target === firstItemRef.current && entry.isIntersecting) {
          setLeftBtnIsVisible(false);
        } else if (
          entry.target === firstItemRef.current &&
          !entry.isIntersecting
        ) {
          setLeftBtnIsVisible(true);
        }

        if (entry.target === lastItemRef.current && entry.isIntersecting) {
          setRightBtnIsVisible(false);
        } else if (
          entry.target === lastItemRef.current &&
          !entry.isIntersecting
        ) {
          setRightBtnIsVisible(true);
        }
      });
    };

    const observerOptions = {
      root: roomTypesRef.current,
      threshold: 0.5,
    };

    intersectionObserverRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    if (types.length > 2) {
      intersectionObserverRef.current.observe(firstItemRef.current);
      intersectionObserverRef.current.observe(lastItemRef.current);
    }

    return () => intersectionObserverRef.current.disconnect();
  }, [types.length]);

  const {
    roomTypes__Container,
    roomTypes__BtnLeft,
    roomTypes__BtnHidden,
    roomTypes__BtnRight,
    roomTypes,
    roomTypes__Type,
  } = styles;
  return (
    <div className={roomTypes__Container}>
      {types.length <= 2 && (
        <>
          <div
            className={`${roomTypes__BtnLeft} ${
              !leftBtnIsVisible ? roomTypes__BtnHidden : ""
            }`}
            onClick={handleSlideLeft}
            ref={leftBtnRef}
          >
            <ChevronLeftIcon />
          </div>
          <div
            className={`${roomTypes__BtnRight} ${
              !rightBtnIsVisible ? roomTypes__BtnHidden : ""
            }`}
            onClick={handleSlideRight}
            ref={rightBtnRef}
          >
            <ChevronRightIcon />
          </div>
        </>
      )}
      <ul className={roomTypes} ref={roomTypesRef}>
        {types.map((item, index, array) => (
          <RoomType
            key={index}
            className={roomTypes__Type}
            src={item.img}
            alt={item.name}
            title={item.name}
            type={item.type}
            price={item.price}
            ref={(node) => {
              if (index === 0) {
                firstItemRef.current = node;
              } else if (index === array.length - 1) {
                lastItemRef.current = node;
              }
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default RoomTypes;
