import styles from "./RoomType.module.scss";
import AddIcon from "../../../../components/UI/SVG/AddIcon";
import MinusIcon from "../../../../components/UI/SVG/MinusIcon";
import { forwardRef } from "react";

const RoomType = function (
  { src, alt, title, description, price, className },
  ref
) {
  const {
    roomType,
    roomType__Img,
    roomType__Info,
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
        <p>{description}</p>
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
