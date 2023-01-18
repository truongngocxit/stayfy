import styles from "./AsideHead.module.scss";
import StarIcon from "../../../../components/UI/SVG/StartIcon";

const AsideHead = function ({ price, stars, className }) {
  const { asideHead, asideHead__Price, asideHead__Review } = styles;
  return (
    <div className={`${asideHead} ${className}`}>
      <div className={asideHead__Price}>
        <span>
          <strong>${price}</strong>
        </span>
        <span>night</span>
      </div>
      <div className={asideHead__Review}>
        <StarIcon />
        <span>{stars}</span>
      </div>
    </div>
  );
};

export default AsideHead;
