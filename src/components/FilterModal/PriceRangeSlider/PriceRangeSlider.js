import styles from "./PriceRangeSlider.module.scss";
import { ConfigProvider, Slider } from "antd";
import { useState, useRef, useContext } from "react";
import priceRangeContext from "../../../contexts/filterModalContext/priceRangeContextProvider";

const PriceRangeSlider = function ({ maxPrice }) {
  const { priceRange, handleRangeChange, handleInputMin, handleInputMax } =
    useContext(priceRangeContext);

  return (
    <>
      <ConfigProvider
        getPopupContainer={(node) => node.parentElement}
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
          defaultValue={[0, maxPrice]}
          min={0}
          max={maxPrice}
          tooltip={{ formatter: (val) => `$${val}` }}
          getTooltipPopupContainer={() =>
            document.querySelector(".ant-slider-step")
          }
          // /zIndex={8000}
        />
      </ConfigProvider>

      <div className={priceRange__Inputs}>
        <div className={priceRange__Input}>
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
        <div className={priceRange__Input}>
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

const { priceRange__Inputs, priceRange__Input } = styles;

// const [priceRange, setPriceRange] = useState({
//   min: 0,
//   max: maxPrice,
// });

// const handleRangeChange = function (event) {
//   setPriceRange({
//     min: event[0],
//     max: event[1],
//   });
// };

// const handleInputMin = function (event) {
//   const input = Number(event.target.value);
//   if (!isFinite(input) || input < 0 || input > priceRange.max) return;
//   setPriceRange({
//     ...priceRange,
//     min: Number(input),
//   });
// };

// const handleInputMax = function (event) {
//   const input = Number(event.target.value);
//   if (!isFinite(input) || input > priceRange.max || input < priceRange.min)
//     return;
//   setPriceRange({
//     ...priceRange,
//     max: input,
//   });
// };
