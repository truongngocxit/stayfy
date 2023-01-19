import styles from "./RoomTypesSelect.module.scss";
import RoomType from "./RoomType/RoomType";
import ChevronLeftIcon from "../../../components/UI/SVG/ChevronLeftIcon";
import ChevronRightIcon from "../../../components/UI/SVG/ChevronRightIcon";
import { useRef, useState, useEffect } from "react";

const RoomTypes = function () {
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
        console.log(entry);
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

    intersectionObserverRef.current.observe(firstItemRef.current);
    intersectionObserverRef.current.observe(lastItemRef.current);
  }, []);

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
      <ul className={roomTypes} ref={roomTypesRef}>
        {new Array(8).fill().map((item, index, array) => (
          <RoomType
            key={index}
            className={roomTypes__Type}
            src="https://a0.muscache.com/im/pictures/miso/Hosting-759973019429492387/original/65f6c4d0-76e3-4a87-954a-116e2d31c007.jpeg?im_w=1200"
            alt="sample master room"
            title="Economy Double room"
            description="1 large double bed"
            price="54"
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
