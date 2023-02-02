import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in`,
  opacity: 0,
};

const transitionStyles = {
  entering: {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
  entered: {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
  exiting: {
    opacity: 0,
    transform: "translate(-50%, 0%)",
  },
  exited: {
    opacity: 0,
    transform: "translate(-50%, 0%)",
  },
};

const ModalTransition = function ({ isVisible, className, children }) {
  return (
    <Transition in={isVisible} timeout={duration} unmountOnExit={true}>
      {(state) => (
        <div
          className={className}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default ModalTransition;
