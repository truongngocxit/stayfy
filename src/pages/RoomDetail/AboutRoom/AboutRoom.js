import styles from "./AboutRoom.module.scss";
import { createPortal } from "react-dom";
import RoomIntroModal from "../RoomIntroModal/RoomIntroModal";
import Overlay from "../../../components/UI/Overlay/Overlay";
import { useState, forwardRef } from "react";
const AboutRoom = forwardRef(function (_, ref) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const handleShowModal = function () {
    setShowMoreModal(true);
  };

  const handleCloseModal = function () {
    setShowMoreModal(false);
  };

  const { aboutRoom } = styles;
  return (
    <>
      <section className={aboutRoom} ref={ref} id="about">
        <p>
          Enjoy your stay in Dalat on the second floor of a 20th century French
          colonial mansion. It features self check-in, a private bathroom,
          kitchenette, and washing machine. Located in the heart of Dalat, the
          studio is merely steps away from an abundance of shops, restaurants,
          and bars. The studio can host 2 people, perfect for solo travellers or
          couples...
        </p>
        <button onClick={handleShowModal}>Show more</button>
      </section>
      {showMoreModal &&
        createPortal(<RoomIntroModal />, document.getElementById("modal-root"))}
      {showMoreModal &&
        createPortal(
          <Overlay onClick={handleCloseModal} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
});

export default AboutRoom;
