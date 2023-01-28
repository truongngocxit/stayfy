import styles from "./LoadingDots.module.scss";
import { useState, useEffect } from "react";

const LoadingDots = function () {
  const [dotNum, setDotNum] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Minus dot");
      if (dotNum < 3) {
        setDotNum((n) => n + 1);
      } else {
        setDotNum(0);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [dotNum]);
  return <span>{".".repeat(dotNum)}</span>;
};

export default LoadingDots;
