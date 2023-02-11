import styles from "./FacilitySelectItem.module.scss";
import CheckIcon from "../../../UI/SVG/CheckIcon";

const FacilitySelectItem = function ({
  tag,
  name,
  onSelectFacility,
  facilitiesSelect,
}) {
  const isChecked = facilitiesSelect.some((fac) => fac === tag);

  const { facility, facility__Checkbox, facility__Active } = styles;
  return (
    <label className={`${facility} ${isChecked ? facility__Active : ""}`}>
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
