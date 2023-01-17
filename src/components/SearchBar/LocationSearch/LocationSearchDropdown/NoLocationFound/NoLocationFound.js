import styles from "./NoLocationFound.module.scss";
import WarningIcon from "../../../../UI/SVG/WarningIcon";

const NoLocationFound = function () {
  const { notFound } = styles;
  return (
    <li className={notFound}>
      <WarningIcon />
      <span>No location found</span>
    </li>
  );
};

export default NoLocationFound;
