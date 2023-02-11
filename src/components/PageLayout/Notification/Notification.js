import styles from "./Notification.module.scss";
import SlideInMessage from "./SlideInMessage/SlideInMessage";
import { useSelector } from "react-redux";

const Notification = function () {
  const { state, text, isIn } = useSelector(state => state.notification);
  return <SlideInMessage isIn={isIn} state={state} text={text} />;
};

export default Notification;
