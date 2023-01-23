import styles from "./RoomTypeTag.module.scss";
import DoubleBedIcon from "../../../../../components/UI/SVG/DoubleBedIcon";
import BunkBedIcon from "../../../../../components/UI/SVG/BunkBedIcon";
import HouseIcon from "../../../../../components/UI/SVG/HouseIcon";

const RoomTypeTag = function ({ type = "Shared", className }) {
  const { typeTag, typeTag__Shared, typeTag__Entire, typeTag__Private } =
    styles;
  let tagIcon, label, tagTypeClass;
  if (type === "Shared") {
    tagIcon = <BunkBedIcon />;
    label = "shared room";
    tagTypeClass = typeTag__Shared;
  } else if (type === "Entire place") {
    tagIcon = <HouseIcon />;
    label = "an entire house";
    tagTypeClass = typeTag__Entire;
  } else if (type === "Private") {
    tagIcon = <DoubleBedIcon />;
    label = "private room";
    tagTypeClass = typeTag__Private;
  }

  return (
    <div className={`${typeTag} ${tagTypeClass} ${className || ""}`}>
      {tagIcon}
      <span>{label}</span>
    </div>
  );
};

export default RoomTypeTag;
