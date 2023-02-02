import styles from "./MainLogo.module.scss";
import BareLogo from "../BareLogo/BareLogo";
import { Link } from "react-router-dom";

export default function MainLogo({ isWhite = false, className }) {
  const { mainLogo, mainLogo__White, mainLogo__Text } = styles;
  return (
    <Link
      className={`${mainLogo} ${className} ${isWhite ? mainLogo__White : ""}`}
      to="/"
    >
      <BareLogo />
      <h2 className={mainLogo__Text}>Stayfy</h2>
    </Link>
  );
}
