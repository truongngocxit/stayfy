import styles from "./MainLogo.module.scss";
import BareLogo from "../BareLogo/BareLogo";

export default function MainLogo({ isWhite = false, className }) {
  const { mainLogo, mainLogo__White, mainLogo__Text } = styles;
  return (
    <div
      className={`${mainLogo} ${className} ${isWhite ? mainLogo__White : ""}`}
    >
      <BareLogo />
      <h2 className={mainLogo__Text}>Stayfy</h2>
    </div>
  );
}
