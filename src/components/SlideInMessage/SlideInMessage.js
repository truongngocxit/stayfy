import styles from "./SlideInMessage.module.scss";
import WarningIcon from "../UI/SVG/WarningIcon";
import CheckIcon from "../UI/SVG/CheckIcon";
import SadIcon from "../UI/SVG/SadIcon";
import NotificationIcon from "../UI/SVG/NotificationIcon";
import { Transition } from "react-transition-group";
import { useState, useEffect } from "react";

const duration = 3000;

const SlideInMessage = function ({ text, state = "successful", className }) {
  const [isIn, setIsIn] = useState(false);

  const { slideIn, slideIn__Successful, slideIn__Failed, slideIn__Warning } =
    styles;

  let messageStyle;
  let messageIcon;

  if (state === "successful") {
    messageStyle = slideIn__Successful;
    messageIcon = <CheckIcon />;
  } else if (state === "failed") {
    messageStyle = slideIn__Failed;
    messageIcon = <SadIcon />;
  } else if (state === "warning") {
    messageStyle = slideIn__Warning;
    messageIcon = <WarningIcon />;
  } else {
    messageStyle = "";
    messageIcon = <NotificationIcon />;
  }

  useEffect(() => {
    setIsIn(true);
    const timeoutId = setTimeout(() => setIsIn(false), duration);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Transition timeout={duration} unmountOnExit={true} in={isIn}>
      {(state) => (
        <div
          className={`${slideIn} ${messageStyle} ${className || ""}`}
          style={{ ...transitionStyles[state], ...defaultStyle }}
        >
          {messageIcon}
          <span>{text}</span>
        </div>
      )}
    </Transition>
  );
};

export default SlideInMessage;

const transitionStyles = {
  entering: { transform: `translate(-50%, 100%)` },
  entered: { transform: `translate(-50%, 100%)` },
  exiting: { transform: `translate(-50%, -100%)` },
  exited: { transform: `translate(-50%, -100%)` },
};

const defaultStyle = {
  transition: `all 500ms ease-in-out`,
};
