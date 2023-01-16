import styles from "./AmenityItem.module.scss";

const AmenityItem = function ({ icon, text, className }) {
  const { amenity } = styles;
  return (
    <div className={`${amenity} ${className}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default AmenityItem;
