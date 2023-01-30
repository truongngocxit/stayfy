import styles from "./RoomInfo.module.scss";

const RoomInfo = function () {
  const { roomInfo, roomInfo__Nav, roomInfo__Main } = styles;
  return (
    <div className={roomInfo}>
      <nav className={roomInfo__Nav}>
        <ul>
          <li>About</li>
          <li>Facilities</li>
          <li>Host</li>
          <li>More</li>
        </ul>
      </nav>
      <div className={roomInfo__Main}></div>
    </div>
  );
};

export default RoomInfo;
