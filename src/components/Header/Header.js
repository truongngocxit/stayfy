import styles from "./Header.module.scss";
import TopNav from "../TopNav/TopNav";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useLayoutEffect, useRef, useState } from "react";

const Header = function ({
  hasFilter = false,
  isFixed = true,
  hasSearchBar = false,
  isHidden = false,
  hasBuffer = true,
  pathname,
}) {
  const headerRef = useRef(null);
  const [bufferHeight, setBufferHeight] = useState(0);
  const headerBufferRef = useRef(null);

  useLayoutEffect(() => {
    const headerHeight = headerRef.current.getBoundingClientRect().height;
    setBufferHeight(headerHeight);
  }, [pathname]);

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
        style={{ height: hasBuffer ? bufferHeight : 0 }}
        ref={headerBufferRef}
      ></div>
      <div
        className={`${header__Main} ${
          isFixed ? header__Fixed : header__Absolute
        }`}
        ref={headerRef}
      >
        <TopNav hasSearchBar={hasSearchBar} isFixed={isFixed} />
        {hasFilter && <FilterMenu />}
      </div>
    </header>
  );
};

export default Header;
