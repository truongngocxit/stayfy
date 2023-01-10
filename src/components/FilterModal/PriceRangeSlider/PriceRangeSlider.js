import styles from "./PriceRangeSlider.module.scss";
import { ConfigProvider, Slider } from "antd";
import { useState } from "react";

const PriceRangeSlider = function () {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
  });

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
    if (!isFinite(input) || input > 1000 || input < priceRange.min) return;
    setPriceRange({
      ...priceRange,
      max: input,
    });
  };

  const { filterModal__Main__Price__Inputs, filterModal__Main__Price__Input } =
    styles;
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b4d8",
            sizeUnit: 6,
            sizeStep: 4,
            fontSize: 16,
          },
        }}
      >
        <Slider
          onChange={handleRangeChange}
          range
          value={[priceRange.min, priceRange.max]}
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          tooltip={{ formatter: (val) => `$${val}` }}
          zIndex={8000}
        />
      </ConfigProvider>

      <div className={filterModal__Main__Price__Inputs}>
        <div className={filterModal__Main__Price__Input}>
          <label htmlFor="minPrice">min</label>
          <div>
            <span>$</span>
            <input
              id="minPrice"
              value={priceRange.min}
              onChange={handleInputMin}
            />
          </div>
        </div>
        <div className={filterModal__Main__Price__Input}>
          <label htmlFor="maxPrice">max</label>
          <div>
            <span>$</span>
            <input
              id="maxPrice"
              value={priceRange.max}
              onChange={handleInputMax}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRangeSlider;
