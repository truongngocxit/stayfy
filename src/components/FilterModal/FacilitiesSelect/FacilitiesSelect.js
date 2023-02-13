import styles from "./FacilitiesSelect.module.scss";
import useFetchData from "../../../custom-hooks/useFetchData";
import FacilitySection from "./FacilitySection/FacilitySection";
import { useState, useContext } from "react";
import facilitiesFilterContext from "../../../contexts/filterModalContext/facilitiesFilterContextProvider";

const FacilitiesSelect = function () {
  const [showMoreIsShown, setShowMoreIsShown] = useState(false);

  const toggleShowMore = function () {
    setShowMoreIsShown((s) => !s);
  };

  const { facilitiesSelect, handleSelectFacility } = useContext(
    facilitiesFilterContext
  );

  const { data, isLoading, error } = useFetchData(
    "https://stayfy-backend.onrender.com/all-docs/facilities"
  );

  const cleansedData = Object.entries(
    data.reduce((accumulatedObject, currentEntry) => {
      if (accumulatedObject[currentEntry.category]) {
        return {
          ...accumulatedObject,
          [currentEntry.category]: [
            ...accumulatedObject[currentEntry.category],
            {
              id: currentEntry.id,
              name: currentEntry.name,
              tag: currentEntry.tag,
            },
          ],
        };
      } else {
        return {
          ...accumulatedObject,
          [currentEntry.category]: [
            {
              id: currentEntry.id,
              name: currentEntry.name,
              tag: currentEntry.tag,
            },
          ],
        };
      }
    }, {})
  );

  const [visibleSection, ...hiddenSection] = cleansedData;

  return (
    <div className={facilities}>
      {visibleSection?.length > 0 && (
        <FacilitySection
          heading={visibleSection[0]}
          items={visibleSection[1]}
          onSelectFacility={handleSelectFacility}
          facilitiesSelect={facilitiesSelect}
        />
      )}
      <div
        className={
          !showMoreIsShown
            ? facilities__SectionHidden
            : facilities__SectionShown
        }
      >
        {hiddenSection?.length > 0 &&
          hiddenSection.map((section) => (
            <FacilitySection
              key={section[0]}
              heading={section[0]}
              items={section[1]}
              onSelectFacility={handleSelectFacility}
              facilitiesSelect={facilitiesSelect}
            />
          ))}
      </div>
      <button className={facilities__ShowBtn} onClick={toggleShowMore}>
        Show {showMoreIsShown ? "less" : "more"}
      </button>
    </div>
  );
};

export default FacilitiesSelect;

const {
  facilities,
  ["facilities__Section--Hidden"]: facilities__SectionHidden,
  ["facilities__Section--Shown"]: facilities__SectionShown,
  facilities__ShowBtn,
} = styles;

// const [facilitiesSelect, setFaciltiesSelect] = useState([]);

// const handleSelectFacility = function (fac) {
//   if (facilitiesSelect.some((curFac) => curFac === fac)) {
//     setFaciltiesSelect((allFacs) =>
//       allFacs.filter((curFac) => curFac !== fac)
//     );
//   } else {
//     setFaciltiesSelect((curFacs) => [...curFacs, fac]);
//   }
// };
