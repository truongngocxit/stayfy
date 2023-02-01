import styles from "./StayItemImageSkeleton.module.scss";
import SkeletonTransition from "../../../../SkeletonTransition/SkeletonTransition";

const StayItemImageSkeleton = function ({ className, isLoading }) {
  const { imageSkeleton } = styles;
  return (
    <SkeletonTransition
      skeletonClassName={imageSkeleton}
      isLoading={isLoading}
    />
  );
};

export default StayItemImageSkeleton;
