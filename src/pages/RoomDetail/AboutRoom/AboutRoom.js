import styles from "./AboutRoom.module.scss";
import { createPortal } from "react-dom";
import RoomIntroModal from "../RoomIntroModal/RoomIntroModal";
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

  const { aboutRoom } = styles;

  let truncatedDescription = description.slice(0, 150);
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
        <p>{truncatedDescription}</p>
        <button onClick={handleShowModal}>Show more</button>
      </section>
      {showMoreModal &&
        createPortal(
          <RoomIntroModal description={description} />,
          document.getElementById("modal-root")
        )}
      {showMoreModal &&
        createPortal(
          <Overlay onClick={handleCloseModal} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
});

export default AboutRoom;
