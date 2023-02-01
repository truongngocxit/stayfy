import styles from "./StaySkeleton.module.scss";
import { Transition } from "react-transition-group";
import SkeletonTransition from "../../SkeletonTransition/SkeletonTransition";
const duration = 2000;

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

const StaySkeleton = function ({ className, isLoading }) {
  const {
    skeleton,
    skeleton__Image,
    skeleton__Info,
    skeleton__Info__Name,
    skeleton__Info__Review,
    skeleton__Info__Location,
    skeleton__Info__Price,
  } = styles;
  return (
    <SkeletonTransition isLoading={isLoading} skeletonClassName={skeleton}>
      <div className={skeleton__Image} />
      <div className={skeleton__Info}>
        <div className={skeleton__Info__Name} />
        <div className={skeleton__Info__Review} />
        <div className={skeleton__Info__Location} />
        <div className={skeleton__Info__Price} />
      </div>
    </SkeletonTransition>
  );
};

export default StaySkeleton;
