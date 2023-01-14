import styles from "./InfoRadio.module.scss";
import CheckIcon from "../../../../../components/UI/SVG/CheckIcon";
import { useState } from "react";

const InfoRadio = function ({ name, legend, values, className, onChange }) {
  const [currentSelection, setCurrentSelection] = useState("");

  const handleChangeSelection = function (event) {
    setCurrentSelection(event.target.value);
  };

  const {
    infoRadio,
    infoRadio__Title,
    infoRadio__Item,
    infoRadio__Item__Checkbox,
    infoRadio__Item__Checkbox__Active,
  } = styles;
  return (
    <form>
      <fieldset className={`${infoRadio} ${className}`}>
        <legend className={infoRadio__Title}>{legend}</legend>
        {values &&
          values.map((v) => (
            <label className={infoRadio__Item} key={v}>
              <div
                className={`${infoRadio__Item__Checkbox} ${
                  currentSelection === v
                    ? infoRadio__Item__Checkbox__Active
                    : ""
                }`}
              >
                <CheckIcon />
              </div>
              <input
                type="radio"
                name={name}
                value={v}
                id={v}
                checked={currentSelection === v}
                onChange={handleChangeSelection}
              />
              <span>{v}</span>
            </label>
          ))}
      </fieldset>
    </form>
  );
};

export default InfoRadio;
