import styles from "./GuestTypeInput.module.scss";
import AddIcon from "../../../UI/SVG/AddIcon";
import MinusIcon from "../../../UI/SVG/MinusIcon";

const GuestTypeInput = function ({
  typeName,
  typeCondition,
  number,
  onIncrease,
  onDecrease,
  decreaseDisable,
  increaseDisable,
}) {
  const {
    guestTypeInput,
    guestTypeInput__Text,
    guestTypeInput__Actions,
    guestTypeInput__Actions__Disable,
  } = styles;
  return (
    <>
      <div className={guestTypeInput__Text}>
        <h3>{typeName}</h3>
        <p>{typeCondition}</p>
      </div>
      <div className={guestTypeInput__Actions}>
        <button
          type="button"
          onClick={onDecrease}
          className={decreaseDisable ? guestTypeInput__Actions__Disable : ""}
          disabled={decreaseDisable}
        >
          <MinusIcon />
        </button>
        <span>{number}</span>
        <button
          type="button"
          onClick={onIncrease}
          className={increaseDisable ? guestTypeInput__Actions__Disable : ""}
          disabled={increaseDisable}
        >
          <AddIcon />
        </button>
      </div>
    </>
  );
};

export default GuestTypeInput;
