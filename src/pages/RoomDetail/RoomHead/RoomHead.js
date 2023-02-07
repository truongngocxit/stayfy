import styles from "./RoomHead.module.scss";
import StarIcon from "../../../components/UI/SVG/StarIcon";
import HeartIcon from "../../../components/UI/SVG/HeartIcon";
const RoomHead = function ({ name, location, review, className }) {
  const {
    roomHead,
    roomHead__Heading,
    roomHead__Info,
    roomHead__Info__Rating,
    roomHead__Actions,
  } = styles;
  return (
    <div className={`${roomHead} ${className}`}>
      <h1 className={roomHead__Heading}>{name}</h1>
      {location && review && (
        <div className={roomHead__Info}>
          <div className={roomHead__Info__Rating}>
            <StarIcon />
            <span>{review}</span>
          </div>
          <span>·</span>
          <div>{location}</div>
        </div>
      )}
      <div className={roomHead__Actions}>
        <HeartIcon />
        <span>Save</span>
      </div>
    </div>
  );
};

export default RoomHead;
