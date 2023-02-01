import styles from "./Header.module.scss";
import TopNav from "../TopNav/TopNav";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useLayoutEffect, useRef, useState } from "react";

const Header = function ({
  hasFilter = false,
  isFixed = true,
  hasSearchBar = false,
  isHidden = false,
}) {
  const headerFixedRef = useRef(null);
  const [bufferHeight, setBufferHeight] = useState(0);
  const headerBufferRef = useRef(null);

  useLayoutEffect(() => {
    const headerHeight = headerFixedRef.current.getBoundingClientRect().height;
    setBufferHeight(headerHeight);
  }, []);

  const {
    header,
    header__Hidden,
    header__Main,
    header__Fixed,
    header__Absolute,
    header__Buffer,
  } = styles;
  return (
    <header className={`${header} ${isHidden ? header__Hidden : ""}`}>
      <div
        className={header__Buffer}
        style={{ height: bufferHeight }}
        ref={headerBufferRef}
      ></div>
      <div
        className={`${header__Main} ${header__Absolute}`}
        ref={headerFixedRef}
      >
        <TopNav hasSearchBar={hasSearchBar} isFixed={isFixed} />
        {hasFilter && <FilterMenu />}
      </div>
    </header>
  );
};

export default Header;
