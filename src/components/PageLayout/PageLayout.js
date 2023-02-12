import styles from "./PageLayout.module.scss";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";
import StaticFooter from "../Footer/StaticFooter";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { activeUserActions } from "../../redux-store/activeUserSlice";
import Notification from "./Notification/Notification";

const PageLayout = function ({ children }) {
  const { pathname } = useLocation();
  const reduxDispatch = useDispatch();
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

  useEffect(() => {
    const retrievedUserInfo = localStorage.getItem("loginInfo");

    if (retrievedUserInfo) {
      reduxDispatch(activeUserActions.userLogin(JSON.parse(retrievedUserInfo)));
    }
  }, [reduxDispatch]);

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

  if (
    isSmallerScreen &&
    (pathname.startsWith("/detail") ||
      pathname.startsWith("/checkout") ||
      pathname === "/profile")
  ) {
    header = null;
  }

  const { layout } = styles;
  return (
    <>
      <div className={layout}>
        {header}
        {children}
        {footer}
      </div>

      {createPortal(<Notification />, document.getElementById("modal-root"))}
    </>
  );
};

export default PageLayout;
