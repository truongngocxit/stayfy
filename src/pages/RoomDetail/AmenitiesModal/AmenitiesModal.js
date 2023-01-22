import styles from "./AmenitiesModal.module.scss";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";
import AmenityGroup from "./AmenityGroup/AmenityGroup";
import getAmenityIcon from "../../../utils/getAmenityIcon";

const AmenitiesModal = function ({
  onCloseModal,
  availableAmenities,
  unavailableAmenities,
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

  const {
    amenities,
    amenities__Header,
    amenities__Header__CloseBtn,
    amenities__Header__Heading,
    amenities__List,
  } = styles;
  return (
    <>
      <div className={amenities}>
        <header className={amenities__Header}>
          <button
            className={amenities__Header__CloseBtn}
            onClick={onCloseModal}
          >
            <CloseIcon />
          </button>
          <h2 className={amenities__Header__Heading}>What this place offers</h2>
        </header>
        <div className={amenities__List}>
          {Object.entries(availableAmenitiesIconsByGroups).map((group) => (
            <AmenityGroup key={group[0]} heading={group[0]} items={group[1]} />
          ))}

          <AmenityGroup
            heading="Not included"
            items={unavailableAmenitiesIcons}
            isIncluded={false}
          />
        </div>
      </div>
    </>
  );
};

export default AmenitiesModal;
