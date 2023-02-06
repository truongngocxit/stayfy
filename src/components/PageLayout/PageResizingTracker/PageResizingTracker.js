import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pageResizeActions } from "../../../redux-store/pageResizeSlice";

export default function PageResizingTracker() {
  const headerRef = useRef(null);

  const reduxDispatch = useDispatch();

  useEffect(() => {
    const handleChangeNumOfGridColumns = function (event) {
      const viewportWith =
        document.documentElement.getBoundingClientRect().width;

      if (viewportWith <= 375) {
        reduxDispatch(pageResizeActions.changeNumOfListingColumns(1));
      } else if (viewportWith <= 544) {
        reduxDispatch(pageResizeActions.changeNumOfListingColumns(2));
      } else if (viewportWith <= 1024) {
        reduxDispatch(pageResizeActions.changeNumOfListingColumns(3));
      } else if (viewportWith <= 1600) {
        reduxDispatch(pageResizeActions.changeNumOfListingColumns(4));
      } else if (viewportWith > 1600) {
        reduxDispatch(pageResizeActions.changeNumOfListingColumns(5));
      }
    };

    window.addEventListener("resize", handleChangeNumOfGridColumns);
    handleChangeNumOfGridColumns();
    return () =>
      window.removeEventListener("resize", handleChangeNumOfGridColumns);
  }, [reduxDispatch]);
  return (
    <div
      style={{
        height: 0,
        width: 0,
        opacity: 0,
        display: "fixed",
      }}
    />
  );
}
