import styles from "./PreviewImageSkeleton.module.scss";
import SkeletonTransition from "../../../../../components/SkeletonTransition/SkeletonTransition";

const PreviewImageSkeleton = function ({ className, isLoading }) {
  const { skeleton } = styles;
  return (
    <SkeletonTransition
      skeletonClassName={`${skeleton} ${className || ""} `}
      isLoading={isLoading}
    ></SkeletonTransition>
  );
};

export default PreviewImageSkeleton;
