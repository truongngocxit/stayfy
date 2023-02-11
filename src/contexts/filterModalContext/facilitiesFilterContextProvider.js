import { createContext, useState } from "react";

const facilitiesFilterContext = createContext();

export const FacilitiesFilterContextProvider = function ({ children }) {
  const [facilitiesSelect, setFaciltiesSelect] = useState([]);

  const handleSelectFacility = function (fac) {
    console.log(fac);
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
