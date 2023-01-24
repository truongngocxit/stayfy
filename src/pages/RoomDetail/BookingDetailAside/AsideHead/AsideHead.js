import styles from "./AsideHead.module.scss";
import StarIcon from "../../../../components/UI/SVG/StartIcon";

const AsideHead = function ({ name, stars, className }) {
  const { asideHead, asideHead__Name, asideHead__Review } = styles;
  return (
    <div className={`${asideHead} ${className}`}>
      <div className={asideHead__Name}>{name}</div>
      <div className={asideHead__Review}>
        <StarIcon />
        <span>{stars}</span>
      </div>
    </div>
  );
};

export default AsideHead;
