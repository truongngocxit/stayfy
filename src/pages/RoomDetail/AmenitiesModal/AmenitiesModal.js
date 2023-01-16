import styles from "./AmenitiesModal.module.scss";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";

const AmenitiesModal = function () {
  const {
    amenities,
    amenities__Header,
    amenities__Header__CloseBtn,
    amenities__Header__Heading,
    amenities__List,
  } = styles;
  return (
    <div className={amenities}>
      <header className={amenities__Header}>
        <button className={amenities__Header__CloseBtn}>
          <CloseIcon />
        </button>
        <h2 className={amenities__Header__Heading}>What this place offers</h2>
      </header>
      <div className={amenities__List}></div>
    </div>
  );
};

export default AmenitiesModal;
