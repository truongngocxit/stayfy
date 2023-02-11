import { createContext, useState } from "react";
import { useSelector } from "react-redux";
const typesFilterContext = createContext();

export const TypesFilterContextProvider = function ({ children }) {
  const { typesOfStay } = useSelector((state) => state.search.filters);

  const [typeFilters, setTypeFilters] = useState(typesOfStay);
  const handleToggleType = function (type) {
    if (typeFilters.some((curType) => curType === type)) {
      setTypeFilters((prevTypes) =>
        prevTypes.filter((curType) => curType !== type)
      );
    } else {
      setTypeFilters((prevTypes) => [...prevTypes, type]);
    }
  };
  const handleResetTypesFilter = function () {
    setTypeFilters([]);
  };
  return (
    <typesFilterContext.Provider
      value={{ typeFilters, handleToggleType, handleResetTypesFilter }}
    >
      {children}
    </typesFilterContext.Provider>
  );
};

export default typesFilterContext;
