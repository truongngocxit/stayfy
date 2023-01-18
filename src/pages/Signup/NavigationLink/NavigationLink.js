import styles from "./NavigationLink.module.scss";
import { Link } from "react-router-dom";

const NavigationLink = function ({ className, text, type = "button", to }) {
  const { loginButton } = styles;
  return (
    <Link type={type} to={to} className={`${className} ${loginButton}`}>
      {text}
    </Link>
  );
};

export default NavigationLink;
