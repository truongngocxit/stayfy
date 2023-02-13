import styles from "./StaticFooter.module.scss";
import BareFooter from "./BareFooter/BareFooter";

const StaticFooter = function ({ isHidden }) {
  const { staticFooter, staticFooter__Copyright } = styles;
  return (
    <div className={staticFooter}>
      <BareFooter />
      <div className={staticFooter__Copyright}>
        © {new Date().getFullYear()} Stayfy
      </div>
    </div>
  );
};

export default StaticFooter;
