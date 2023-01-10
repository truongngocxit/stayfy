import styles from "./PageLayout.module.scss";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";

const PageLayout = function ({ children }) {
  const { layout } = styles;
  return (
    <div>
      <Header />
      {children}
      <BottomNav />
    </div>
  );
};

export default PageLayout;
