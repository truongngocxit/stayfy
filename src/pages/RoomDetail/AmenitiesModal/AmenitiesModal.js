import styles from "./AmenitiesModal.module.scss";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";
import AmenityGroup from "./AmenityGroup/AmenityGroup";

const AmenitiesModal = function ({ onCloseModal }) {
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
          <AmenityGroup heading="Scenic views" items={new Array(3).fill()} />
          <AmenityGroup heading="Safety" items={new Array(4).fill()} />
        </div>
      </div>
    </>
  );
};

export default AmenitiesModal;
