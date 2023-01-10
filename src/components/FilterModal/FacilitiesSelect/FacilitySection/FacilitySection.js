import styles from "./FacilitySection.module.scss";
import FacilitySelect from "../FacilitySelectItem/FacilitySelect";

const FacilitySection = function ({ heading, items }) {
  const { facilitySection } = styles;
  return (
    <div className={facilitySection}>
      <h4>{heading}</h4>
      {items.map((i) => (
        <FacilitySelect key={i.id} name={i.name} />
      ))}
    </div>
  );
};

export default FacilitySection;
