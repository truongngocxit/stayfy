import AmenityItem from "../AmenityItem/AmenityItem";
import styles from "./AmenityGroup.module.scss";
import Garden from "../../../../components/UI/RoomFeaturesIcon/Garden";

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
        {items.map((item, index) => (
          <li className={amenityGroup__Container__Item}>
            <AmenityItem
              icon={<Garden />}
              key={index}
              text="Gardening on premises"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenityGroup;
