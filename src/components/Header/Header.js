import styles from "./Header.module.scss";
import TopNav from "../TopNav/TopNav";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useRef, useState, useEffect } from "react";
import { tabletWidth } from "../../utils/conts";

const Header = function ({
  hasFilter = false,
  isFixed = true,
  hasSearchBar = false,
  isHidden = false,
  hasBuffer = true,
}) {
  const headerRef = useRef(null);
  const [bufferHeight, setBufferHeight] = useState(0);
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const resizeObserverRef = useRef(null);
  const headerBufferRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries, action) {
      const headerHeight =
        headerRef.current?.getBoundingClientRect().height || 0;

      setBufferHeight(headerHeight);

      if (entries[0].contentRect.width <= tabletWidth) {
        setIsTabletScreen(true);
      } else {
        setIsTabletScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);
  }, []);

  return (
    <header className={`${header} ${isHidden ? headerHidden : ""}`}>
      <div
        className={header__Buffer}
        style={{ height: hasBuffer ? bufferHeight : 0 }}
        ref={headerBufferRef}
      ></div>
      <div
        className={`${header__Main} ${isFixed ? headerFixed : headerAbsolute}`}
        ref={headerRef}
      >
        <TopNav
          hasSearchBar={hasSearchBar}
          isFixed={isFixed}
          isTabletScreen={isTabletScreen}
        />
        {hasFilter && <FilterMenu isTabletScreen={isTabletScreen} />}
      </div>
    </header>
  );
};

export default Header;

const {
  header,
  ["header--Hidden"]: headerHidden,
  header__Main,
  ["header--Fixed"]: headerFixed,
  ["header--Absolute"]: headerAbsolute,
  header__Buffer,
} = styles;
