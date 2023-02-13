import styles from "./AboutRoom.module.scss";
import { createPortal } from "react-dom";
import RoomIntroModal from "./RoomIntroModal/RoomIntroModal";
import Overlay from "../../../components/UI/Overlay/Overlay";
import { useState, forwardRef } from "react";
const AboutRoom = forwardRef(function ({ description }, ref) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const handleShowModal = function () {
    setShowMoreModal(true);
  };

  const handleCloseModal = function () {
    setShowMoreModal(false);
  };

  let truncatedDescription = description.slice(0, 200);
  if (truncatedDescription[truncatedDescription.length - 1] === " ") {
    truncatedDescription = truncatedDescription.substring(
      0,
      truncatedDescription.length - 1
    );
  }
  truncatedDescription += "...";
  return (
    <>
      <section className={aboutRoom} ref={ref} id="about">
        <p className={aboutRoom__Content}>{truncatedDescription}</p>
        <button className={aboutRoom__MoreBtn} onClick={handleShowModal}>
          Show more
        </button>
      </section>
      {createPortal(
        <RoomIntroModal
          description={description}
          onCloseModal={handleCloseModal}
          isVisible={showMoreModal}
        />,
        document.getElementById("modal-root")
      )}
      {showMoreModal &&
        createPortal(
          <Overlay onClick={handleCloseModal} zIndex={1200} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
});

export default AboutRoom;

const { aboutRoom, aboutRoom__Content, aboutRoom__MoreBtn } = styles;
