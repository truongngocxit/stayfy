import { Transition } from "react-transition-group";

const duration = 700;

const defaultStyle = {
  transition: `all ${duration}mas ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: "translate(-50%, 0%)",
  },
  entered: {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
};

const ModalTransition = function () {
  return <Transition></Transition>;
};

export default ModalTransition;
