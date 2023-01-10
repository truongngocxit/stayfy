import styles from "./FacilitySelect.module.scss";
import CheckIcon from "../../../UI/SVG/CheckIcon";
import { useState } from "react";

const FacilitySelect = function ({ name }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChecked = function () {
    console.log("toggle");
    setIsChecked((c) => !c);
  };

  const { facility, facility__Checkbox, facility__Active } = styles;
  return (
    <label className={`${facility} ${isChecked ? facility__Active : ""}`}>
      <div className={facility__Checkbox}>
        <CheckIcon />
        <input
          type="checkbox"
          value={isChecked}
          onChange={handleToggleChecked}
        />
      </div>
      <span>{name}</span>
    </label>
  );
};

export default FacilitySelect;
