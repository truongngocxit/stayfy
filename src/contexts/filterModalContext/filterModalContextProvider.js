import { FacilitiesFilterContextProvider } from "./facilitiesFilterContextProvider";
import { TypesFilterContextProvider } from "./typesFilterContextProvider";
import { PriceRangeContextProvider } from "./priceRangeContextProvider";

const FilterModalContextProvider = function ({ children }) {
  return (
    <FacilitiesFilterContextProvider>
      <TypesFilterContextProvider>
        <PriceRangeContextProvider>{children}</PriceRangeContextProvider>
      </TypesFilterContextProvider>
    </FacilitiesFilterContextProvider>
  );
};

export default FilterModalContextProvider;
