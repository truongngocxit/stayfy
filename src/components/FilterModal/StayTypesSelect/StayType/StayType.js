import styles from "./StayType.module.scss";
import HouseIcon from "../../../UI/SVG/HouseIcon";
import CheckIcon from "../../../UI/SVG/CheckIcon";

const StayType = function ({
  onClick,
  heading,
  description,
  isSelected,
  value,
  onChange,
  icon = <HouseIcon />,
}) {
  const { stayType, stayType__customCheckbox, stayType__Active } = styles;
  return (
    <label
      className={`${stayType} ${isSelected ? stayType__Active : ""}`}
      onClick={onClick}
    >
      {icon}
      <div className={stayType__customCheckbox}>
        <CheckIcon />
        <input
          type="checkbox"
          checked={isSelected}
          value={value}
          onChange={onChange}
        />
      </div>
      <h4>{heading}</h4>
      <p>{description}</p>
    </label>
  );
};

export default StayType;
