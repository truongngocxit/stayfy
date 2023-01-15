import styles from "./MainLogo.module.scss";
import BareLogo from "../BareLogo/BareLogo";

export default function MainLogo() {
  const { mainLogo, mainLogo__Text } = styles;
  return (
    <div className={mainLogo}>
      <BareLogo />
      <h2 className={mainLogo__Text}>Stayfy</h2>
    </div>
  );
}
