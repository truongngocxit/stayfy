import styles from "./PopupFooter.module.scss";
import CloseIcon from "../UI/SVG/CloseIcon";
import Footer from "./Footer";

const PopupFooter = function ({ onCloseFooter }) {
  const { footer__CloseIcon, footer__Fixed } = styles;
  return (
    <>
      <div className={footer__Fixed}>
        <div className={footer__CloseIcon} onClick={onCloseFooter}>
          <CloseIcon />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PopupFooter;
