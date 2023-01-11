import styles from "./StayItem.module.scss";
import HeartIcon from "../../UI/SVG/HeartIcon";
import StarIcon from "../../UI/SVG/StartIcon";

const StayItem = function () {
  const {
    stayItem,
    stayItem__Description,
    stayItem__Image,
    stayItem__Description_Name,
    stayItem__Description_Review,
    stayItem__Description_Feature,
    stayItem__Description_Date,
    stayItem__Description_Price,
  } = styles;
  return (
    <div className={stayItem}>
      <div className={stayItem__Image}>
        <HeartIcon />
        <img
          src="https://a0.muscache.com/im/pictures/d682f7bf-caa4-4433-9038-c5f81a01845b.jpg?im_w=720"
          alt="dummy"
        />
      </div>
      <div className={stayItem__Description}>
        <h4 className={stayItem__Description_Name}>Nha Trang, Vietnam</h4>
        <span className={stayItem__Description_Review}>
          <StarIcon /> <span>5.0</span>
        </span>
        <span className={stayItem__Description_Feature}>Ocean Views</span>
        <span className={stayItem__Description_Date}>Jan 17 - 22</span>
        <span className={stayItem__Description_Price}>
          <strong>$1.161</strong> night
        </span>
      </div>
    </div>
  );
};

export default StayItem;
