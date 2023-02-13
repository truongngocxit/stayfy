import styles from "./FacilitySelectItem.module.scss";
import CheckIcon from "../../../../UI/SVG/CheckIcon";

const FacilitySelectItem = function ({
  tag,
  name,
  onSelectFacility,
  facilitiesSelect,
}) {
  const isChecked = facilitiesSelect.some((fac) => fac === tag);

  return (
    <label className={`${facility} ${isChecked ? facilityActive : ""}`}>
      <div className={facility__Checkbox}>
        <CheckIcon />
        <input
          value={tag}
          type="checkbox"
          checked={isChecked}
          onChange={onSelectFacility.bind(null, tag)}
        />
      </div>
      <span>{name}</span>
    </label>
  );
};

export default FacilitySelectItem;

const {
  facility,
  facility__Checkbox,
  ["facility--Active"]: facilityActive,
} = styles;
