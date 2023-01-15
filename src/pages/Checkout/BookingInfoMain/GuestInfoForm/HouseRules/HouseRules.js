import styles from "./HouseRules.module.scss";
import WarningIcon from "../../../../../components/UI/SVG/WarningIcon";

const HouseRules = function () {
  const { rules, rules__Heading, rules__List, rules__List__Item } = styles;
  return (
    <div className={rules}>
      <h3 className={rules__Heading}>Review house rules</h3>
      <p>Your host would like you to agree to the following house rules:</p>
      <ul className={rules__List}>
        <li className={rules__List__Item}>
          <WarningIcon />
          <span>Quiet hours are between 23:00 and 05:00</span>
        </li>
        <li className={rules__List__Item}>
          <WarningIcon />
          <span>Pets are not allowed</span>
        </li>
      </ul>
      <p>
        <strong>
          By continuing to the next step, you are agreeing to these house rules.
        </strong>
      </p>
    </div>
  );
};

export default HouseRules;
