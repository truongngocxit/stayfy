import styles from "./CountdownLine.module.scss";
import { useState, useEffect } from "react";

const CountdownLine = function ({ className, color, duration }) {
  const [lineWidth, setLineWidth] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLineWidth((w) => w - 100 / (duration * 0.84 * 10));
    }, 100);
    if (lineWidth <= 0) clearInterval(intervalId);

    return () => clearInterval(intervalId);
  }, [lineWidth, duration]);

  const { countdownLine } = styles;
  return (
    <div
      className={countdownLine}
      style={{
        width: `${lineWidth}%`,
        backgroundColor: `${color}`,
      }}
    />
  );
};

export default CountdownLine;
