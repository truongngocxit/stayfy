import styles from "./FounderItem.module.scss";

const FounderItem = function ({ src, name, title }) {
  const {
    founder,
    founder__Image,
    founder__Description,
    founder__Description__Name,
    founder__Description__Title,
  } = styles;
  return (
    <div className={founder}>
      <div className={founder__Image}>
        <img src={src} alt={`${name} - ${title}`} />
      </div>
      <div className={founder__Description}>
        <h4 className={founder__Description__Name}>{name}</h4>
        <span className={founder__Description__Title}>{title}</span>
      </div>
    </div>
  );
};

export default FounderItem;
