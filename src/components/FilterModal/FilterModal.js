import styles from "./FilterModal.module.scss";
import CloseIcon from "../UI/SVG/CloseIcon";
import PriceRangeSlider from "./PriceRangeSlider/PriceRangeSlider";
import ClearFilterButton from "./ClearFilterButton/ClearFilterButton";
import ShowResultsBtn from "./ShowResultsBtn/ShowResultsBtn";
import { createPortal } from "react-dom";
import Overlay from "../UI/Overlay/Overlay";
import FacilitiesSelect from "./FacilitiesSelect/FacilitiesSelect";
import ModalTransition from "../ModalTransition/ModalTransition";
import FilterModalContextProvider from "../../contexts/filterModalContext/filterModalContextProvider";
import StayTypesSelect from "./StayTypesSelect/StayTypesSelect";

const FilterModal = function ({
  onClick,
  isVisible,
  isFullScreen = false,
  maxPrice = 100,
}) {
  const {
    filterModal,
    filterModal__FullScreen,
    filterModal__Head,
    filterModal__Main,
    filterModal__Main__ScrollContainer,
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
      <ModalTransition
        className={`${filterModal} ${
          isFullScreen ? filterModal__FullScreen : ""
        }`}
        isVisible={isVisible}
      >
        <FilterModalContextProvider>
          <header className={filterModal__Head}>
            <button onClick={onClick}>
              <CloseIcon />
            </button>
            <h2>Filters</h2>
          </header>
          <main className={filterModal__Main}>
            <div className={filterModal__Main__ScrollContainer}>
              <div className={filterModal__Main__Price}>
                <h3>Price range</h3>

                {maxPrice && <PriceRangeSlider maxPrice={maxPrice} />}
              </div>
              <form className={filterModal__Main__Type}>
                <h3>Type of Stay</h3>

                <StayTypesSelect
                  className={filterModal__Main__Type__Container}
                />
              </form>
              <div className={filterModal__Main__Facilities}>
                <h3>Facilities</h3>
                <FacilitiesSelect />
              </div>
            </div>
          </main>
          <footer className={filterModal__Foot}>
            <ClearFilterButton className={filterModal__Foot__ClearBtn} />
            <ShowResultsBtn
              className={filterModal__Foot__ShowBtn}
              onCloseModal={onClick}
            />
          </footer>
        </FilterModalContextProvider>
      </ModalTransition>
      {isVisible &&
        createPortal(
          <Overlay zIndex={1100} onClick={onClick} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default FilterModal;

// const [typeFilters, setTypeFilters] = useState([]);

// const handleAddType = function (type) {
//   setTypeFilters((prevTypes) => [...prevTypes, type]);
// };

// const handleRemoveType = function (type) {
//   setTypeFilters((prevTypes) =>
//     prevTypes.filter((curType) => curType !== type)
//   );
// };

// const handleToggleType = function (type) {
//   if (typeFilters.some((curType) => curType === type)) {
//     setTypeFilters((prevTypes) =>
//       prevTypes.filter((curType) => curType !== type)
//     );
//   } else {
//     setTypeFilters((prevTypes) => [...prevTypes, type]);
//   }
// };

/* <div className={filterModal__Main__Type__Container}>
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
                
              </div> */
