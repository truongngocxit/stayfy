import AmenityItem from "../AmenityItem/AmenityItem";
import styles from "./AmenityGroup.module.scss";

const AmenityGroup = function ({ heading, items }) {
  const {
    amenityGroup,
    amenityGroup__Heading,
    amenityGroup__Container,
    amenityGroup__Container__Item,
  } = styles;
  return (
    <div className={amenityGroup}>
      <h3 className={amenityGroup__Heading}>{heading}</h3>
      <ul className={amenityGroup__Container}>
        {items.map((item) => (
          <li className={amenityGroup__Container__Item}>
            <AmenityItem icon={item.icon} key={item.text} text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenityGroup;