import styles from "./RoomHead.module.scss";
import StarIcon from "../../../components/UI/SVG/StarIcon";
import HeartIcon from "../../../components/UI/SVG/HeartIcon";
const RoomHead = function ({ name, location, review, className }) {
  return (
    <div className={`${roomHead} ${className}`}>
      <h1 className={roomHead__Heading}>{name}</h1>

      <div className={roomHead__Info}>
        <div className={roomHead__Info__Rating}>
          <StarIcon />
          <span>{review}</span>
        </div>
        <span>·</span>
        <span className={roomHead__Info__Location}>{location}</span>
      </div>

      <div className={roomHead__Actions}>
        {/* <HeartIcon />
        <span>Save</span> */}
      </div>
    </div>
  );
};

export default RoomHead;

const {
  roomHead,
  roomHead__Heading,
  roomHead__Info,
  roomHead__Info__Rating,
  roomHead__Info__Location,
  roomHead__Actions,
} = styles;
