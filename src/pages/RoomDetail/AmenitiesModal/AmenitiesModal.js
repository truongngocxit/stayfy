import styles from "./AmenitiesModal.module.scss";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";
import AmenitiesList from "./AmenitiesList/AmenitiesList";
import ModalTransition from "../../../components/ModalTransition/ModalTransition";

const AmenitiesModal = function ({
  onCloseModal,
  availableAmenities,
  unavailableAmenities,
  isVisible,
}) {
  return (
    <ModalTransition className={amenities} isVisible={isVisible}>
      <header className={amenities__Header}>
        <button className={amenities__Header__CloseBtn} onClick={onCloseModal}>
          <CloseIcon />
        </button>
        <h2 className={amenities__Header__Heading}>What this place offers</h2>
      </header>
      <AmenitiesList
        availableAmenities={availableAmenities}
        unavailableAmenities={unavailableAmenities}
      />
    </ModalTransition>
  );
};

export default AmenitiesModal;

const {
  amenities,
  amenities__Header,
  amenities__Header__CloseBtn,
  amenities__Header__Heading,
} = styles;
