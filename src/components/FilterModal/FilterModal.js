import styles from "./FilterModal.module.scss";
import CloseIcon from "../UI/SVG/CloseIcon";
import PriceRangeSlider from "./PriceRangeSlider/PriceRangeSlider";
import StayType from "./StayType/StayType";
import BunkBedIcon from "../UI/SVG/BunkBedIcon";
import DoubleBedIcon from "../UI/SVG/DoubleBedIcon";
import HouseIcon from "../UI/SVG/HouseIcon";
import { createPortal } from "react-dom";
import Overlay from "../UI/Overlay/Overlay";
import FacilitiesSelect from "./FacilitiesSelect/FacilitiesSelect";

const FilterModal = function ({ onClick }) {
  const {
    filterModal,
    filterModal__Head,
    filterModal__Main,
    filterModal__Main__Price,
    filterModal__Main__Type,
    filterModal__Main__Type__Container,
    filterModal__Main__Facilities,
    filterModal__Foot,
    filterModal__Foot__ClearBtn,
    filterModal__Foot__ShowBtn,
  } = styles;
  return (
    <>
      <div className={filterModal}>
        <header className={filterModal__Head}>
          <button onClick={onClick}>
            <CloseIcon />
          </button>
          <h2>Filters</h2>
        </header>
        <main className={filterModal__Main}>
          <div className={filterModal__Main__Price}>
            <h3>Price range</h3>

            <PriceRangeSlider />
          </div>
          <form className={filterModal__Main__Type}>
            <h3>Type of Stay</h3>
            <div className={filterModal__Main__Type__Container}>
              <StayType
                icon={<HouseIcon />}
                heading="Entire place"
                description="...all to yourself"
              />
              <StayType
                icon={<DoubleBedIcon />}
                heading="Private room"
                description="...for a group of 2 - 5"
              />
              <StayType
                icon={<BunkBedIcon />}
                heading="Shared room"
                description="...with other guests"
              />
            </div>
          </form>
          <div className={filterModal__Main__Facilities}>
            <h3>Facilities</h3>
            <FacilitiesSelect />
          </div>
        </main>
        <footer className={filterModal__Foot}>
          <button className={filterModal__Foot__ClearBtn}>
            Clear all filters
          </button>
          <button className={filterModal__Foot__ShowBtn}>
            Show 1000 results
          </button>
        </footer>
      </div>
      {createPortal(
        <Overlay zIndex={1100} onClick={onClick} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default FilterModal;
