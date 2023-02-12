import styles from "./SkeletonFilterSvg.module.scss";

const SkeletonFilterSvg = function () {
  const { skeletonSvg } = styles;
  return <div className={skeletonSvg} />;
};

export default SkeletonFilterSvg;
