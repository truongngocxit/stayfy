import styles from "./BottomNav.module.scss";
import ChevronTopIcon from "../UI/SVG/ChevronTopIcon";
import PopupFooter from "../Footer/PopupFooter";
import MoreIcon from "../UI/SVG/MoreIcon";
import Overlay from "../UI/Overlay/Overlay";
import ProfileButton from "../TopNav/ProfileButton/ProfileButton";
import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";

const BottomNav = function ({ isTransparent = false }) {
  const [bottomFooterIsVisible, setBottomFooterIsVisible] = useState(false);
  const resizeObserverRef = useRef(null);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const lastScrollPosition = useRef(null);

  useEffect(() => {
    if (!lastScrollPosition.current) {
      lastScrollPosition.current = 0;
    }
    const handleScrollY = function (event) {
      const currentScrollY = event.currentTarget.scrollY;

      setIsScrollDown(currentScrollY > lastScrollPosition.current);
      lastScrollPosition.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (
      entries,
      observer
    ) {
      if (entries[0].contentRect.width <= 744) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  const handleOpenFooter = function () {
    setBottomFooterIsVisible(true);
  };

  const handleCloseFooter = function () {
    setBottomFooterIsVisible(false);
  };

  return (
    <>
      <div
        className={`${bottomNav} ${
          isScrollDown ? bottomNavDown : bottomNavUp
        } ${isTransparent ? bottomNavTransparent : ""}`}
      >
        {isSmallerScreen ? (
          <ProfileButton
            loginDropdownStyle={{
              transform: "translate(60%, -45%)",
            }}
          />
        ) : (
          <span>© {new Date().getFullYear()} Stayfy</span>
        )}

        <div className={bottomNav__MoreBtn} onClick={handleOpenFooter}>
          {isSmallerScreen ? (
            <MoreIcon />
          ) : (
            <>
              <span>More</span>
              <ChevronTopIcon />
            </>
          )}
        </div>
      </div>
      {createPortal(
        <PopupFooter
          onCloseFooter={handleCloseFooter}
          isVisible={bottomFooterIsVisible}
        />,
        document.getElementById("modal-root")
      )}
      {bottomFooterIsVisible &&
        createPortal(
          <Overlay zIndex={1500} onClick={handleCloseFooter} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default BottomNav;

const {
  bottomNav,
  ["bottomNav--Up"]: bottomNavUp,
  ["bottomNav--Down"]: bottomNavDown,
  ["bottomNav--Transparent"]: bottomNavTransparent,
  bottomNav__MoreBtn,
} = styles;
