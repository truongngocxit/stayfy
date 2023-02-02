import styles from "./BottomNav.module.scss";
import ChevronTopIcon from "../UI/SVG/ChevronTopIcon";
import PopupFooter from "../Footer/PopupFooter";
import Overlay from "../UI/Overlay/Overlay";
import { createPortal } from "react-dom";
import { useState } from "react";

const BottomNav = function ({ isTransparent = false }) {
  const [bottomIsVisible, setBottomIsVisible] = useState(false);

  const handleOpenFooter = function () {
    setBottomIsVisible(true);
  };

  const handleCloseFooter = function () {
    setBottomIsVisible(false);
  };

  const { bottomNav, bottomNav__Transparent, bottomNav__Resources } = styles;
  return (
    <>
      <div
        className={`${bottomNav} ${
          isTransparent ? bottomNav__Transparent : ""
        }`}
      >
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
          <PopupFooter onCloseFooter={handleCloseFooter} />,
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
