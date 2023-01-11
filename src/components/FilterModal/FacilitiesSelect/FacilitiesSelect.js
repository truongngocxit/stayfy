import styles from "./FacilitiesSelect.module.scss";
import useFetchData from "../../../custom-hooks/useFetchData";
import FacilitySection from "./FacilitySection/FacilitySection";
import { useState } from "react";
const FacilitiesSelect = function () {
  const [showMoreIsShown, setShowMoreIsShown] = useState(false);

  const toggleShowMore = function () {
    setShowMoreIsShown((s) => !s);
  };

  const { data, isLoading, error } = useFetchData(
    "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/facilities.json"
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
            },
          ],
        };
      }
    }, {})
  );

  const [visibleSection, ...hiddenSection] = cleansedData;

  const {
    facilities,

    facilities__Section__Hidden,
    facilities__Section__Shown,
    facilities__ShowBtn,
  } = styles;

  return (
    <div className={facilities}>
      {visibleSection?.length > 0 && (
        <FacilitySection
          heading={visibleSection[0]}
          items={visibleSection[1]}
        />
      )}
      <div
        className={
          !showMoreIsShown
            ? facilities__Section__Hidden
            : facilities__Section__Shown
        }
      >
        {hiddenSection?.length > 0 &&
          hiddenSection.map((section) => (
            <FacilitySection
              key={section[0]}
              heading={section[0]}
              items={section[1]}
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
