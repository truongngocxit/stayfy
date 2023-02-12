import { createContext, useState } from "react";
import { useSelector } from "react-redux";

const facilitiesFilterContext = createContext();

export const FacilitiesFilterContextProvider = function ({ children }) {
  const { facilities } = useSelector((state) => state.search.filters);

  const [facilitiesSelect, setFaciltiesSelect] = useState(facilities);

  const handleSelectFacility = function (fac) {
    if (facilitiesSelect.some((curFac) => curFac === fac)) {
      setFaciltiesSelect((allFacs) =>
        allFacs.filter((curFac) => curFac !== fac)
      );
    } else {
      setFaciltiesSelect((curFacs) => [...curFacs, fac]);
    }
  };

  const handleResetFacilitiesSelect = function () {
    setFaciltiesSelect([]);
  };

  return (
    <facilitiesFilterContext.Provider
      value={{
        facilitiesSelect,
        handleSelectFacility,
        handleResetFacilitiesSelect,
      }}
    >
      {children}
    </facilitiesFilterContext.Provider>
  );
};

export default facilitiesFilterContext;
