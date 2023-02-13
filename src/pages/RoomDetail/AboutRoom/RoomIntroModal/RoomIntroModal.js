import styles from "./RoomIntroModal.module.scss";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";
import ModalTransition from "../../../../components/ModalTransition/ModalTransition";

const RoomIntroModal = function ({ description, onCloseModal, isVisible }) {
  const { introModal, introModal__CloseBtn, introModal__Content } = styles;

  return (
    <ModalTransition className={introModal} isVisible={isVisible}>
      <button className={introModal__CloseBtn} onClick={onCloseModal}>
        <CloseIcon />
      </button>
      <div className={introModal__Content}>
        <h1>About this place</h1>
        {description.split("\\n").map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </ModalTransition>
  );
};

export default RoomIntroModal;
