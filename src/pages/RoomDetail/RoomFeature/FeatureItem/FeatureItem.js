import styles from "./FeatureItem.module.scss";

const FeatureItem = function ({ label, icon }) {
  const { featureItem } = styles;
  return (
    <li className={featureItem}>
      {icon}
      <span>{label}</span>
    </li>
  );
};

export default FeatureItem;
