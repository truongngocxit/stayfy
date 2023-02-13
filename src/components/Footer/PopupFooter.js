import styles from "./PopupFooter.module.scss";
import CloseIcon from "../UI/SVG/CloseIcon";
import Footer from "./BareFooter/BareFooter";
import ModalTransition from "../ModalTransition/ModalTransition";

const transitionStyles = {
  entering: {
    opacity: 1,
    transform: "translate(0, 0)",
  },
  entered: {
    opacity: 1,
    transform: "translate(0, 0)",
  },
  exiting: {
    opacity: 1,
    transform: "translate(0, 100%)",
  },
  exited: {
    opacity: 1,
    transform: "translate(0, 100%)",
  },
};

const PopupFooter = function ({ onCloseFooter, isVisible }) {
  const { footer__CloseIcon, footer__Fixed } = styles;
  return (
    <ModalTransition
      isVisible={isVisible}
      transitionStyles={transitionStyles}
      className={footer__Fixed}
      duration={250}
    >
      <div className={footer__CloseIcon} onClick={onCloseFooter}>
        <CloseIcon />
      </div>
      <Footer />
    </ModalTransition>
  );
};

export default PopupFooter;
