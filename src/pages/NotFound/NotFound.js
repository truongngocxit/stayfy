import styles from "./NotFound.module.scss";
import MainLogo from "../../components/UI/MainLogo/MainLogo";
import HomeButton from "../../components/TopNav/HomeButton/HomeButton";
import LoadingScreen from "../Profile/LoadingScreen/LoadingScreen";
import { createPortal } from "react-dom";
import { useState } from "react";

const NotFound = function () {
  const [backgroundHasLoad, setBackgroundHasLoad] = useState(false);
  const handleBackgroundHasLoad = function () {
    setBackgroundHasLoad(true);
  };

  const { notFound, notFound__Message, notFound__Logo, notFound__Background } =
    styles;
  return (
    <>
      <div className={notFound}>
        <MainLogo className={notFound__Logo} isWhite={true} />
        <div className={notFound__Background}>
          <img
            alt="Not found page background"
            src={require("../../assets/notfound-background.jpg")}
            onLoad={handleBackgroundHasLoad}
          />
        </div>
        <div className={notFound__Message}>
          <h1>404</h1>
          <p>Looked like you've lost in this spooky forest</p>
        </div>

        <HomeButton>Get out now</HomeButton>
      </div>
      {!backgroundHasLoad &&
        createPortal(
          <LoadingScreen />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default NotFound;
