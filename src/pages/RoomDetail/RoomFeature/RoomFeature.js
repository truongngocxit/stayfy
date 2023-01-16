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
import { forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "../../../components/UI/Overlay/Overlay";
import AmenitiesModal from "../AmenitiesModal/AmenitiesModal";

const RoomFeature = forwardRef(function (_, ref) {
  const [amenitiesModalIsShown, setAmenitiesModalIsShown] = useState(false);

  const handleOpenAmenitiesModal = function () {
    setAmenitiesModalIsShown(true);
  };

  const handleCloseAmenitiesModal = function () {
    setAmenitiesModalIsShown(false);
  };

  const {
    roomFeatures,
    roomFeatures__List,
    roomFeatures__List__Item,
    roomFeatures__MoreBtn,
  } = styles;
  return (
    <>
      <div className={roomFeatures} ref={ref} id="features">
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
        <button
          className={roomFeatures__MoreBtn}
          onClick={handleOpenAmenitiesModal}
        >
          Show all amenities
        </button>
      </div>
      {amenitiesModalIsShown &&
        createPortal(
          <AmenitiesModal onCloseModal={handleCloseAmenitiesModal} />,
          document.getElementById("modal-root")
        )}

      {amenitiesModalIsShown &&
        createPortal(
          <Overlay zIndex={1500} onClick={handleCloseAmenitiesModal} />,
          document.getElementById("modal-root")
        )}
    </>
  );
});

export default RoomFeature;
