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
  const typeTarget = selectedTypes.find((roomType) => roomType.name === title);
  const handleToggleTypeSelect = function () {
    if (type === "Entire place" && typeTarget.quantity === 0) {
      onSelectTypes((prevRooms) =>
        prevRooms.map((room) => {
          if (room.type === "Entire place") {
            return { ...room, quantity: 1 };
          } else {
            return { ...room, quantity: 0 };
          }
        })
      );
    }
    if (type === "Entire place" && typeTarget.quantity === 1) {
      onSelectTypes((prevRooms) =>
        prevRooms.map((room) => {
          if (room.type === "Entire place") {
            return { ...room, quantity: 0 };
          } else {
            return { ...room };
          }
        })
      );
    }
    if (type !== "Entire place" && typeTarget.quantity === 0) {
      onSelectTypes((prevRooms) =>
        prevRooms.map((room) => {
          if (room.name === title) {
            return { ...room, quantity: 1 };
          }
          if (room.type === "Entire place") {
            return { ...room, quantity: 0 };
          }
          return { ...room };
        })
      );
    }

    if (type !== "Entire place" && typeTarget.quantity > 0) {
      onSelectTypes((prevRooms) =>
        prevRooms.map((room) => {
          if (room.name === typeTarget.name) {
            return { ...room, quantity: 0 };
          }
          if (room.type === "Entire place") {
            return { ...room, quantity: 0 };
          }
          return { ...room };
        })
      );
    }
  };

  const handleIncreaseRoomNum = function (event) {
    event.stopPropagation();
    if (type === "Entire place") return;
    onSelectTypes((prevRooms) =>
      prevRooms.map((room) => {
        if (room.name === title) {
          return { ...room, quantity: room.quantity + 1 };
        }
        return { ...room };
      })
    );
  };

  const handleDecreaseRoomNum = function (event) {
    event.stopPropagation();
    if (type === "Entire place") return;
    onSelectTypes((prevRooms) =>
      prevRooms.map((room) => {
        if (room.name === title) {
          return { ...room, quantity: room.quantity - 1 };
        }
        return { ...room };
      })
    );
  };

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
        typeTarget.quantity > 0 ? roomType__Selected : ""
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
          quantity={typeTarget.quantity}
        />
      </div>
    </li>
  );
};

export default forwardRef(RoomType);
