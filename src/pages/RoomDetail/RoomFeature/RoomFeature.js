import styles from "./RoomFeature.module.scss";
import CityView from "../../../components/UI/RoomFeaturesIcon/CityView";
import BeachView from "../../../components/UI/RoomFeaturesIcon/NearBeach";
import Wifi from "../../../components/UI/RoomFeaturesIcon/Wifi";
import Pool from "../../../components/UI/RoomFeaturesIcon/Pool";
import TV from "../../../components/UI/RoomFeaturesIcon/TV";
import MountainView from "../../../components/UI/RoomFeaturesIcon/MountainView";
import Kitchen from "../../../components/UI/RoomFeaturesIcon/Kitchen";
import Workspace from "../../../components/UI/RoomFeaturesIcon/Workspace";
import HotTub from "../../../components/UI/RoomFeaturesIcon/HotTub";
import SecurityCamera from "../../../components/UI/RoomFeaturesIcon/SecurityCamera";

const RoomFeature = function () {
  const {
    roomFeatures,
    roomFeatures__List,
    roomFeatures__List__Item,
    roomFeatures__MoreBtn,
  } = styles;
  return (
    <div className={roomFeatures}>
      <h2>What this place offers</h2>
      <ul className={roomFeatures__List}>
        <li className={roomFeatures__List__Item}>
          <CityView />
          <span>City skyline view</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <BeachView />
          <span>Beach Access</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <Wifi />
          <span>Wifi</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <Pool />
          <span>Shared indoor pool</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <TV />
          <span>30" HDTV</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <MountainView />
          <span>Mountain View</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <Kitchen />
          <span>Kitchen</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <Workspace />
          <span>Dedicated workspace</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <HotTub />
          <span>Hot tub</span>
        </li>
        <li className={roomFeatures__List__Item}>
          <SecurityCamera />
          <span>Security cameras on premise</span>
        </li>
      </ul>
      <button className={roomFeatures__MoreBtn}>Show all amenities</button>
    </div>
  );
};

export default RoomFeature;
