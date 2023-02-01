import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const SkeletonTransition = function ({
  children,
  skeletonClassName,
  isLoading,
}) {
  return (
    <Transition in={isLoading} timeout={duration} unmountOnExit={true}>
      {(state) => (
        <div
          className={skeletonClassName}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default SkeletonTransition;
