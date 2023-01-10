import styles from "./StayType.module.scss";
import HouseIcon from "../../UI/SVG/HouseIcon";
import CheckIcon from "../../UI/SVG/CheckIcon";
import { useState } from "react";
const StayType = function ({ heading, description, icon = <HouseIcon /> }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = function () {
    setIsSelected((s) => !s);
  };

  const { stayType, stayType__customCheckbox, stayType__Active } = styles;
  return (
    <label className={`${stayType} ${isSelected ? stayType__Active : ""}`}>
      {icon}
      <div className={stayType__customCheckbox}>
        <CheckIcon />
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleToggleSelect}
        />
      </div>
      <h4>{heading}</h4>
      <p>{description}</p>
    </label>
  );
};

export default StayType;
