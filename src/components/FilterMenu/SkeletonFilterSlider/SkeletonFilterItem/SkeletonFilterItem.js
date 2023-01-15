import styles from "./SkeletonFilterItem.module.scss";

const SkeletonFilterItem = function () {
  const { skeletonItem, skeletonItem__Icon, skeletonItem__Text } = styles;
  return (
    <div className={skeletonItem}>
      <div className={skeletonItem__Icon}></div>
      <div className={skeletonItem__Text}></div>
    </div>
  );
};

export default SkeletonFilterItem;
