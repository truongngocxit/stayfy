import styles from "./HomeButton.module.scss";
import { Link } from "react-router-dom";
import HomePageIcon from "../../UI/SVG/HomePageIcon";

const HomeButton = function ({ className, children }) {
  const { homeBtn } = styles;
  return (
    <Link className={`${homeBtn} ${className || ""}`} to="/">
      <HomePageIcon />
      <span>{children}</span>
    </Link>
  );
};

export default HomeButton;
