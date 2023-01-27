import styles from "./CountdownLine.module.scss";
import { useState, useEffect } from "react";

const CountdownLine = function (className) {
  const [lineWidth, setLineWidth] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLineWidth((w) => w - 1);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const { countdownLine } = styles;
  return <div className={countdownLine} style={{ width: `${lineWidth}%` }} />;
};

export default CountdownLine;
