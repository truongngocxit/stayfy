import AmenityItem from "../AmenityItem/AmenityItem";
import styles from "./AmenityGroup.module.scss";

const AmenityGroup = function ({ heading, items, isIncluded = true }) {
  return (
    <div className={amenityGroup}>
      <h3 className={amenityGroup__Heading}>{heading}</h3>
      <ul className={amenityGroup__Group}>
        {items.map((item) => (
          <li className={amenityGroup__Item} key={item.text}>
            <AmenityItem
              isIncluded={isIncluded}
              icon={item.icon}
              text={item.text}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenityGroup;

const {
  amenityGroup,
  amenityGroup__Heading,
  amenityGroup__Group,
  amenityGroup__Item,
} = styles;
