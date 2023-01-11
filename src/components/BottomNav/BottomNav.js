import styles from "./BottomNav.module.scss";
import ChevronTopIcon from "../UI/SVG/ChevronTopIcon";
import Footer from "../Footer/Footer";
import Overlay from "../UI/Overlay/Overlay";
import { createPortal } from "react-dom";
import { useState } from "react";

const BottomNav = function () {
  const [bottomIsVisible, setBottomIsVisible] = useState(false);

  const handleOpenFooter = function () {
    setBottomIsVisible(true);
  };

  const handleCloseFooter = function () {
    setBottomIsVisible(false);
  };

  const { bottomNav, bottomNav__Resources } = styles;
  return (
    <>
      <div className={bottomNav}>
        <div>
          <span>© {new Date().getFullYear()} Stayfy</span>
        </div>
        <div className={bottomNav__Resources} onClick={handleOpenFooter}>
          <span>Support & Resources</span>
          <ChevronTopIcon />
        </div>
      </div>
      {bottomIsVisible &&
        createPortal(
          <Footer onCloseFooter={handleCloseFooter} />,
          document.getElementById("modal-root")
        )}
      {bottomIsVisible &&
        createPortal(
          <Overlay zIndex={1500} onClick={handleCloseFooter} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default BottomNav;
