import styles from "./Error404.module.scss";
import { useState, useEffect } from "react";

const Error = function () {
  const [width, setWidth] = useState(100);
  useEffect(() => {
    console.log("RUn effect");
    const intervalId = setInterval(() => {
      setWidth((w) => w - 20);
    }, 100);

    if (width <= 0) {
      setWidth(0);
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [width]);
  return (
    <div>
      <div
        style={{
          width: `${width}%`,
          height: "5rem",
          backgroundColor: "red",
          transition: "all 0.01",
        }}
      />
      <h1>{(width / 20).toFixed(0)}</h1>
    </div>
  );
};

export default Error;
