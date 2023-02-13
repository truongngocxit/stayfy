import { Transition } from "react-transition-group";

const defaultTransitionStyles = {
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

const defaultDuration = 300;

const ModalTransition = function ({
  isVisible,
  className,
  children,
  transitionStyles = defaultTransitionStyles,
  duration = defaultDuration,
}) {
  const defaultStyle = {
    transition: `all ${duration}ms ease-in`,
    opacity: 0,
  };

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
