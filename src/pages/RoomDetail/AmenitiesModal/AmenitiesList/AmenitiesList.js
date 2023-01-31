import styles from "./AmenitiesList.module.scss";
import getAmenityIcon from "../../../../utils/getAmenityIcon";
import AmenityGroup from "../AmenityGroup/AmenityGroup";

const AmenitiesList = function ({
  availableAmenities,
  unavailableAmenities,
  className,
}) {
  const availableAmenitiesIcons = availableAmenities.map((a) =>
    getAmenityIcon(a)
  );

  const availableAmenitiesIconsByGroups = availableAmenitiesIcons.reduce(
    (finalList, currentIcon) => {
      if (finalList[currentIcon.category]) {
        return {
          ...finalList,
          [currentIcon.category]: [
            ...finalList[currentIcon.category],
            {
              icon: currentIcon.icon,
              text: currentIcon.text,
            },
          ],
        };
      } else {
        return {
          ...finalList,
          [currentIcon.category]: [
            {
              icon: currentIcon.icon,
              text: currentIcon.text,
            },
          ],
        };
      }
    },
    {}
  );

  const unavailableAmenitiesIcons = unavailableAmenities.map((a) =>
    getAmenityIcon(a)
  );

  const { amenitiesList } = styles;
  return (
    <div className={`${amenitiesList} ${className}`}>
      {Object.entries(availableAmenitiesIconsByGroups).map((group) => (
        <AmenityGroup key={group[0]} heading={group[0]} items={group[1]} />
      ))}

      <AmenityGroup
        heading="Not included"
        items={unavailableAmenitiesIcons}
        isIncluded={false}
      />
    </div>
  );
};

export default AmenitiesList;
