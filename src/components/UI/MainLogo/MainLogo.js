import styles from "./MainLogo.module.scss";
import BareLogo from "../BareLogo/BareLogo";

export default function MainLogo({ isWhite = false, className, onClick }) {
  return (
    <div
      className={`${mainLogo} ${className} ${isWhite ? mainLogoWhite : ""}`}
      onClick={onClick}
    >
      <BareLogo />
      <h2 className={mainLogo__Text}>Stayfy</h2>
    </div>
  );
}

const { mainLogo, ["mainLogo--White"]: mainLogoWhite, mainLogo__Text } = styles;
