import styles from "./GuestTypeInput.module.scss";
import AddIcon from "../../UI/SVG/AddIcon";
import MinusIcon from "../../UI/SVG/MinusIcon";

const GuestTypeInput = function ({ typeName, typeCondition }) {
  const { guestTypeInput, guestTypeInput__Text, guestTypeInput__Actions } =
    styles;
  return (
    <div className={guestTypeInput}>
      <div className={guestTypeInput__Text}>
        <h3>{typeName}</h3>
        <span>{typeCondition}</span>
      </div>
      <div className={guestTypeInput__Actions}>
        <button>
          <MinusIcon />
        </button>
        <span>0</span>
        <button>
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default GuestTypeInput;
