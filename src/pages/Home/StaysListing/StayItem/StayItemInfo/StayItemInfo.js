import styles from "./StayItemInfo.module.scss";
import StarIcon from "../../../../../components/UI/SVG/StarIcon";

const StayItemInfo = function ({ className, name, location, review, price }) {
  const {
    itemInfo,
    itemInfo__Name,
    itemInfo__Review,
    itemInfo__Location,
    itemInfo__Price,
  } = styles;

  return (
    <div className={`${itemInfo} ${className || ""}`}>
      <h4 className={itemInfo__Name}>{name}</h4>
      <span className={itemInfo__Review}>
        <StarIcon /> <span>{review.toFixed(1)}</span>
      </span>
      <span className={itemInfo__Location}>{location}</span>
      <span className={itemInfo__Price}>
        <strong>${price.toFixed(2)}</strong> /night
      </span>
    </div>
  );
};

export default StayItemInfo;
