import styles from "./StayItem.module.scss";
import { Link } from "react-router-dom";
import StayItemImage from "./StayItemImage/StayItemImage";
import StayItemInfo from "./StayItemInfo/StayItemInfo";
import { forwardRef } from "react";

const StayItem = forwardRef(function ({ item }, ref) {
  const { stayItem, stayItem__Image, stayItem__Info } = styles;

  return (
    <Link to={`detail/${item.id}`} state={item} className={stayItem} ref={ref}>
      <StayItemImage
        imgs={[...new Set(item.images)]}
        className={stayItem__Image}
      />
      <StayItemInfo
        location={item.location}
        name={item.name}
        price={item.price}
        review={item.review}
        className={stayItem__Info}
      />
    </Link>
  );
});

export default StayItem;
