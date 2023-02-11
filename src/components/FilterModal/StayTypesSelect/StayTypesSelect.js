import styles from "./StayTypesSelect.module.scss";
import StayType from "./StayType/StayType";
import { useContext } from "react";
import typesFilterContext from "../../../contexts/filterModalContext/typesFilterContextProvider";
import HouseIcon from "../../UI/SVG/HouseIcon";
import DoubleBedIcon from "../../UI/SVG/DoubleBedIcon";
import BunkBedIcon from "../../UI/SVG/BunkBedIcon";

const StayTypesSelect = function ({ className }) {
  const { typeFilters, handleToggleType } = useContext(typesFilterContext);

  const { stayTypes } = styles;
  return (
    <div className={`${stayTypes} ${className}`}>
      <StayType
        icon={<HouseIcon />}
        heading="Entire place"
        description="...all to yourself"
        isSelected={typeFilters.some((type) => type === "entire")}
        onChange={handleToggleType.bind(null, "entire")}
        value="entire"
      />
      <StayType
        icon={<DoubleBedIcon />}
        heading="Private room"
        description="...for a group of 2 - 5"
        isSelected={typeFilters.some((type) => type === "private")}
        onChange={handleToggleType.bind(null, "private")}
        value="private"
      />
      <StayType
        icon={<BunkBedIcon />}
        heading="Shared room"
        description="...with other guests"
        isSelected={typeFilters.some((type) => type === "shared")}
        onChange={handleToggleType.bind(null, "shared")}
        value="shared"
      />
    </div>
  );
};

export default StayTypesSelect;
