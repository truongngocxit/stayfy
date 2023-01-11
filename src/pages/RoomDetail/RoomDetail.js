import styles from "./RoomDetail.module.scss";
import RoomHead from "./RoomHead/RoomHead";
import ImagesPreview from "./ImagesPreview/ImagesPreview";
import RoomMain from "./RoomMain/RoomMain";

const RoomDetail = function () {
  const { roomDetail } = styles;
  return (
    <div className={roomDetail}>
      <RoomHead />
      <ImagesPreview />
      <RoomMain />
    </div>
  );
};

export default RoomDetail;
