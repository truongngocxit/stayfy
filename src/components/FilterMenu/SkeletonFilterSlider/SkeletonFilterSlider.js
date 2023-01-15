import styles from "./SkeletonFilterSlider.module.scss";
import SkeletonFilterItem from "./SkeletonFilterItem/SkeletonFilterItem";

const SkeletonFilterSlider = function () {
  const { skeletonFilterSlider } = styles;
  return (
    <div className={skeletonFilterSlider}>
      {new Array(20).fill().map((item, index, array) => (
        <SkeletonFilterItem key={index} />
      ))}
    </div>
  );
};

export default SkeletonFilterSlider;
