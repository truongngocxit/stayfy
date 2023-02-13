import styles from "./SkeletonFilterItem.module.scss";

const SkeletonFilterItem = function () {
  const { skeletonItem, skeletonItem__Icon, skeletonItem__Text } = styles;
  return (
    <div className={skeletonItem}>
      <div className={skeletonItem__Icon} />
      <div className={skeletonItem__Text} />
    </div>
  );
};

export default SkeletonFilterItem;
