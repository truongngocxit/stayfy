import styles from "./RoomType.module.scss";

import UserIcon from "../../../../components/UI/SVG/UserIcon";
import RoomTypeTag from "./RoomTypeTag/RoomTypeTag";
import CheckIcon from "../../../../components/UI/SVG/CheckIcon";
import RoomTypeQuantity from "./RoomTypeQuantity/RoomTypeQuantity";
import { forwardRef, useState } from "react";

const RoomType = function (
  {
    src,
    alt,
    title,
    type,
    price,
    sleeps,
    className,
    onSelectTypes,
    selectedTypes,
  },
  ref
) {
  const [roomNum, setRoomNum] = useState(0);

  const handleToggleTypeSelect = function () {
    if (
      !selectedTypes.some((type) => type.title === title) &&
      type === "Entire place"
    ) {
      setRoomNum((n) => n + 1);
      onSelectTypes([
        {
          type,
          price,
          title,
        },
      ]);
    } else if (
      !selectedTypes.some((type) => type.title === title) &&
      type !== "Entire place"
    ) {
      setRoomNum((n) => n + 1);
      onSelectTypes((types) =>
        [
          ...types,
          {
            type,
            price,
            title,
          },
        ].filter((type) => type.type !== "Entire place")
      );
    } else {
      setRoomNum(0);
      onSelectTypes((types) => types.filter((t) => t.title !== title));
    }
  };

  const handleIncreaseRoomNum = function (event) {
    event.stopPropagation();
    if (!selectedTypes.some((type) => type.title === title)) return;
    if (roomNum >= 5) return;
    setRoomNum((num) => num + 1);
  };

  const handleDecreaseRoomNum = function (event) {
    event.stopPropagation();
    if (!selectedTypes.some((type) => type.title === title)) return;
    if (roomNum === 0) return;
    if (roomNum === 1) {
      onSelectTypes((types) => types.filter((t) => t.title !== title));
    }

    setRoomNum((num) => num - 1);
  };

  const roomTypeIsSelected = selectedTypes.some((type) => type.title === title);

  const {
    roomType,
    roomType__Selected,
    roomType__Checkbox,
    roomType__Img,
    roomType__Info,
    roomType__Sleeps,
    roomType__Sleeps__Text,
    roomType__Sleeps__Icon,
    roomType__Price,
    roomType__Price__Price,
    roomType__HiddenQuantity,
  } = styles;
  return (
    <li
      className={`${roomType} ${
        roomTypeIsSelected ? roomType__Selected : ""
      } ${className}`}
      ref={ref}
      onClick={handleToggleTypeSelect}
    >
      <div className={roomType__Checkbox}>
        <CheckIcon />
      </div>
      <div className={roomType__Img}>
        <img src={src} alt={alt} />
      </div>
      <div className={roomType__Info}>
        <h3>{title}</h3>
        <RoomTypeTag type={type} />
      </div>
      <div className={roomType__Sleeps}>
        <span className={roomType__Sleeps__Text}>1 king bed, 1 queen bed</span>
        <span className={roomType__Sleeps__Icon}>
          <UserIcon />x<strong>{sleeps}</strong>
        </span>
      </div>
      <div className={roomType__Price}>
        <span className={roomType__Price__Price}>
          <strong>${price}</strong> /night
        </span>

        <RoomTypeQuantity
          onIncreaseRoomNum={handleIncreaseRoomNum}
          onDecreaseRoomNum={handleDecreaseRoomNum}
          roomNum={roomNum}
          className={roomNum <= 0 ? roomType__HiddenQuantity : ""}
        />
      </div>
    </li>
  );
};

export default forwardRef(RoomType);
