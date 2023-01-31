import Overlay from "../../../components/UI/Overlay/Overlay";
import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import styles from "./LoadingScreen.module.scss";

const LoadingScreen = function ({ onClick, zIndex = 2200 }) {
  const { loadingScreen__Spinner } = styles;
  return (
    <>
      <div className={loadingScreen__Spinner}>
        <LoadingSpinner color="#48cae4" width="0.6rem" />
      </div>
      <Overlay zIndex={zIndex} backgroundOpacity={0.02} onClick={onClick} />
    </>
  );
};

export default LoadingScreen;
