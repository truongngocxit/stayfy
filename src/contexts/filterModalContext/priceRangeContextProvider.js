import { createContext, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const priceRangeContext = createContext();

export const PriceRangeContextProvider = function ({ children }) {
  const {
    priceRange: { min: minRange, max: maxRange },
  } = useSelector((state) => state.search.filters);

  const [priceRange, setPriceRange] = useState({
    min: minRange || 0,
    max: maxRange || 200,
  });

  const maxPriceRef = useRef(null);

  useEffect(() => {
    (async function () {
      const response = await axios({
        method: "GET",
        url: "https://stayfy-backend.onrender.com/query-lodge",
        params: {
          orderBy: "price.avg",
          descending: true,
          limit: 1,
        },
      });

      const higestLodgePrice = Number(
        Object.entries(response.data)[0][1].price.max.toFixed(2)
      );

      setPriceRange((prevRange) => ({
        ...prevRange,
        max: maxRange || higestLodgePrice,
      }));

      maxPriceRef.current = higestLodgePrice;
    })();
  }, []);

  const handleRangeChange = function (event) {
    setPriceRange({
      min: event[0],
      max: event[1],
    });
  };

  const handleInputMin = function (event) {
    const input = Number(event.target.value);
    if (!isFinite(input) || input < 0 || input > priceRange.max) return;
    setPriceRange({
      ...priceRange,
      min: Number(input),
    });
  };

  const handleInputMax = function (event) {
    const input = Number(event.target.value);
    if (!isFinite(input) || input > priceRange.max || input < priceRange.min)
      return;
    setPriceRange({
      ...priceRange,
      max: input,
    });
  };

  const handleResetPriceRange = function () {
    setPriceRange({
      min: 0,
      max: maxPriceRef.current,
    });
  };

  return (
    <priceRangeContext.Provider
      value={{
        priceRange,
        handleRangeChange,
        handleInputMin,
        handleInputMax,
        handleResetPriceRange,
      }}
    >
      {children}
    </priceRangeContext.Provider>
  );
};

export default priceRangeContext;
