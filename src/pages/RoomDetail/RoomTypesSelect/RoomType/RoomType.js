import styles from "./RoomType.module.scss";
import AddIcon from "../../../../components/UI/SVG/AddIcon";
import MinusIcon from "../../../../components/UI/SVG/MinusIcon";
import UserIcon from "../../../../components/UI/SVG/UserIcon";
import RoomTypeTag from "./RoomTypeTag/RoomTypeTag";
import { forwardRef } from "react";

const RoomType = function (
  { src, alt, title, type, price, sleeps, className },
  ref
) {
  const {
    roomType,
    roomType__Img,
    roomType__Info,
    roomType__Info__Sleeps,
    roomType__Info__Sleeps__Text,
    roomType__Info__Sleeps__Icon,
    roomType__Price,
    roomType__Price__Price,
  } = styles;
  return (
    <li className={`${roomType} ${className}`} ref={ref}>
      <div className={roomType__Img}>
        <img src={src} alt={alt} />
      </div>
      <div className={roomType__Info}>
        <h3>{title}</h3>
        <RoomTypeTag type={type} />
      </div>
      <div className={roomType__Info__Sleeps}>
        <span className={roomType__Info__Sleeps__Text}>
          1 king bed, 1 queen bed
        </span>
        <span className={roomType__Info__Sleeps__Icon}>
          <UserIcon />x<strong>{sleeps}</strong>
        </span>
      </div>
      <div className={roomType__Price}>
        <span className={roomType__Price__Price}>
          <strong>${price}</strong> /night
        </span>
        <RoomTypeQuantity />
      </div>
    </li>
  );
};

export default forwardRef(RoomType);

const RoomTypeQuantity = function () {
  const { typeQuantity, typeQuantity__Btn, typeQuantity__Quantity } = styles;
  return (
    <div className={typeQuantity}>
      <div className={typeQuantity__Btn}>
        <AddIcon />
      </div>
      <span className={typeQuantity__Quantity}>0</span>
      <div className={typeQuantity__Btn}>
        <MinusIcon />
      </div>
    </div>
  );
};
