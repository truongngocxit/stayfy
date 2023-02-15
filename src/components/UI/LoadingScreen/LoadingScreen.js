import Overlay from "../Overlay/Overlay";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styles from "./LoadingScreen.module.scss";

const LoadingScreen = function ({
  onClick,
  backgroundIsFiltered = true,
  zIndex = 2200,
}) {
  const { loadingScreen__Spinner } = styles;
  return (
    <>
      <div className={loadingScreen__Spinner}>
        <LoadingSpinner
          color={backgroundIsFiltered ? "#48cae4" : "#fff"}
          width="0.6rem"
        />
      </div>
      <Overlay
        zIndex={zIndex}
        backgroundOpacity={0.02}
        onClick={onClick}
        {...(!backgroundIsFiltered ? { backgroundColor: "#48cae4" } : {})}
      />
    </>
  );
};

export default LoadingScreen;
