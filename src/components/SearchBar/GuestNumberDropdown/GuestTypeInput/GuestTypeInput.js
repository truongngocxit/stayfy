import styles from "./GuestTypeInput.module.scss";
import AddIcon from "../../../UI/SVG/AddIcon";
import MinusIcon from "../../../UI/SVG/MinusIcon";

const GuestTypeInput = function ({
  typeName,
  typeCondition,
  number,
  onIncrease,
  onDecrease,
  numIsUnder,
  numIsOver,
}) {
  const {
    guestTypeInput,
    guestTypeInput__Text,
    guestTypeInput__Actions,
    guestTypeInput__Actions__Disable,
  } = styles;
  return (
    <div className={guestTypeInput}>
      <div className={guestTypeInput__Text}>
        <h3>{typeName}</h3>
        <p>{typeCondition}</p>
      </div>
      <div className={guestTypeInput__Actions}>
        <button
          onClick={onDecrease}
          className={numIsUnder ? guestTypeInput__Actions__Disable : ""}
          disabled={numIsUnder}
        >
          <MinusIcon />
        </button>
        <span>{number}</span>
        <button
          onClick={onIncrease}
          className={numIsOver ? guestTypeInput__Actions__Disable : ""}
          disabled={numIsOver}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default GuestTypeInput;
