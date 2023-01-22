import styles from "./RoomIntroModal.module.scss";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";

const RoomIntroModal = function ({ description }) {
  const { introModal, introModal__CloseBtn, introModal__Content } = styles;

  return (
    <div className={introModal}>
      <button className={introModal__CloseBtn}>
        <CloseIcon />
      </button>
      <div className={introModal__Content}>
        <h1>About this place</h1>
        {description.split("\\n").map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export default RoomIntroModal;
