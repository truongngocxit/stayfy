import styles from "./StayItem.module.scss";
import { Link } from "react-router-dom";
import StayItemImage from "./StayItemImage/StayItemImage";
import StayItemInfo from "./StayItemInfo/StayItemInfo";

const StayItem = function ({ item }) {
  const { stayItem, stayItem__Image } = styles;

  return (
    <Link to={`detail/${item.id}`} state={item} className={stayItem}>
      <StayItemImage
        imgs={[...new Set(item.images)]}
        className={stayItem__Image}
      />
      <StayItemInfo
        location={item.location}
        name={item.name}
        price={item.price}
        review={item.review}
      />
    </Link>
  );
};

export default StayItem;
