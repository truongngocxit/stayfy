import styles from "./StaticFooter.module.scss";
import Footer from "./Footer";

const StaticFooter = function ({ isHidden }) {
  const { staticFooter, staticFooter__Copyright } = styles;
  return (
    <div className={staticFooter}>
      <Footer />
      <div className={staticFooter__Copyright}>
        © {new Date().getFullYear()} Stayfy
      </div>
    </div>
  );
};

export default StaticFooter;
