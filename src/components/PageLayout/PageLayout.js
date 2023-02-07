import styles from "./PageLayout.module.scss";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";
import StaticFooter from "../Footer/StaticFooter";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const PageLayout = function ({ children }) {
  const { pathname } = useLocation();

  console.log(pathname);

  const resizeObserverRef = useRef(null);

  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      if (entries[0].contentRect.width <= 744) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  let headerProps = {
    hasFilter: false,
    isFixed: true,
    hasSearchBar: false,
    isHidden: false,
  };

  let footer = <StaticFooter />;

  if (pathname === "/") {
    headerProps = {
      hasFilter: true,
      isFixed: true,
      hasSearchBar: true,
      isHidden: false,
    };
    footer = <BottomNav />;
  }

  if (pathname === "/login" || pathname === "/signup" || pathname === "/404") {
    headerProps = { ...headerProps, isHidden: true };
    footer = null;
  }

  if (pathname === "/404") {
    headerProps = { ...headerProps, isHidden: true };
    footer = <BottomNav isTransparent={true} />;
  }

  if (pathname === "/checkout" || pathname.startsWith("/checkout")) {
    headerProps = { ...headerProps, isFixed: false };
  }

  if (pathname === "/about") {
    headerProps = { ...headerProps, isFixed: false, hasBuffer: false };
  }

  if (pathname === "/test") {
    headerProps = { ...headerProps, isHidden: true };
    footer = null;
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  let header = <Header {...headerProps} pathname={pathname} />;

  console.log(pathname.startsWith("/detail"));

  if (isSmallerScreen && pathname.startsWith("/detail")) {
    header = null;
  }

  const { layout } = styles;
  return (
    <div className={layout}>
      {header}
      {children}
      {footer}
    </div>
  );
};

export default PageLayout;
