import styles from "./PageLayout.module.scss";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";
import StaticFooter from "../Footer/StaticFooter";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PageLayout = function ({ children }) {
  const { pathname } = useLocation();
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

  const { layout } = styles;
  return (
    <div className={layout}>
      <Header {...headerProps} pathname={pathname} />
      {children}
      {footer}
    </div>
  );
};

export default PageLayout;
