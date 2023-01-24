import styles from "./RoomTypeQuantity.module.scss";
import AddIcon from "../../../../../components/UI/SVG/AddIcon";
import MinusIcon from "../../../../../components/UI/SVG/MinusIcon";

const RoomTypeQuantity = function ({
  onIncreaseRoomNum,
  onDecreaseRoomNum,
  quantity,
  className,
}) {
  const increaseBtnIsDisabled = quantity >= 5;
  const decreaseBtnIsDisabled = quantity <= 0;

  const { typeQuantity, typeQuantity__Btn, typeQuantity__Quantity } = styles;
  return (
    <div className={`${typeQuantity} ${className}`}>
      <button
        className={typeQuantity__Btn}
        onClick={onDecreaseRoomNum}
        disabled={decreaseBtnIsDisabled}
      >
        <MinusIcon />
      </button>
      <span className={typeQuantity__Quantity}>{quantity}</span>

      <button
        className={typeQuantity__Btn}
        onClick={onIncreaseRoomNum}
        disabled={increaseBtnIsDisabled}
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default RoomTypeQuantity;
