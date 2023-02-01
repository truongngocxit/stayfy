import styles from "./Error404.module.scss";
import { useRef, useEffect, useState } from "react";

const Error = function () {
  const [hasLoaded, setHasLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const loadPromise = new Promise((resolve, reject) => {
      imageRef.current.addEventListener("load", function () {
        setHasLoaded(true);
      });
    });
  }, []);
  console.log(imageRef);
  return (
    <div>
      <h1>{hasLoaded ? "SUCCESSFUL" : "NOT YET"}</h1>
      <img
        src="https://images.unsplash.com/photo-1674786838888-0bbdbe2597b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="dummy"
        ref={imageRef}
      />
    </div>
  );
};

export default Error;
