import styles from "./FacilitySection.module.scss";
import FacilitySelect from "./FacilitySelectItem/FacilitySelectItem";

const FacilitySection = function ({
  heading,
  items,
  onSelectFacility,
  facilitiesSelect,
}) {
  return (
    <div className={facilitySection}>
      <h4>{heading}</h4>
      {items.map((i) => (
        <FacilitySelect
          key={i.id}
          name={i.name}
          tag={i.tag}
          onSelectFacility={onSelectFacility}
          facilitiesSelect={facilitiesSelect}
        />
      ))}
    </div>
  );
};

export default FacilitySection;

const { facilitySection } = styles;
