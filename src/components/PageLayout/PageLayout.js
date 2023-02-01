import styles from "./PageLayout.module.scss";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";
import StaticFooter from "../Footer/StaticFooter";
import { useLocation } from "react-router-dom";

const PageLayout = function ({ children }) {
  const location = useLocation();

  let headerProps = {
    hasFilter: false,
    isFixed: true,
    hasSearchBar: false,
    isHidden: false,
  };

  let footer = <StaticFooter />;

  if (location.pathname === "/") {
    headerProps = {
      hasFilter: true,
      isFixed: false,
      hasSearchBar: true,
      isHidden: false,
    };
    footer = <BottomNav />;
  }

  if (location.pathname === "/login" || location.pathname === "/signup") {
    headerProps = { ...headerProps, isHidden: true };
    footer = null;
  }

  const { layout } = styles;
  return (
    <div className={layout}>
      <Header {...headerProps} />
      {children}
      {footer}
    </div>
  );
};

export default PageLayout;
