import styles from "./AmenityItem.module.scss";

const AmenityItem = function ({ icon, text, className, isIncluded = true }) {
  const { amenity, amenity__Icon, amenity__NotIncluded } = styles;
  return (
    <div
      className={`${amenity} ${className} ${
        !isIncluded ? amenity__NotIncluded : ""
      }`}
    >
      <div className={`${amenity__Icon}`}>{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default AmenityItem;
