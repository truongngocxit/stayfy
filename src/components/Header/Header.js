import styles from "./Header.module.scss";
import TopNav from "../TopNav/TopNav";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useLayoutEffect, useRef, useState, useEffect } from "react";

const Header = function () {
  const headerFixedRef = useRef(null);
  const [bufferHeight, setBufferHeight] = useState(0);
  const headerBufferRef = useRef(null);

  useLayoutEffect(() => {
    const headerHeight = headerFixedRef.current.getBoundingClientRect().height;
    setBufferHeight(headerHeight);
  }, []);

  const { header, header__FixedContainer, header__Buffer } = styles;
  return (
    <header className={header}>
      <div
        className={header__Buffer}
        style={{ height: bufferHeight }}
        ref={headerBufferRef}
      ></div>
      <div className={header__FixedContainer} ref={headerFixedRef}>
        <TopNav />
        <FilterMenu />
      </div>
    </header>
  );
};

export default Header;
