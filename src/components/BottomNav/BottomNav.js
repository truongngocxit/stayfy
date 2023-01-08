import styles from "./BottomNav.module.scss";
import ChevronTopIcon from "../UI/SVG/ChevronTopIcon";

const BottomNav = function () {
  const { bottomNav, bottomNav__Resources } = styles;
  return (
    <div className={bottomNav}>
      <div>
        <span>© {new Date().getFullYear()} Stayfy</span>
      </div>
      <div className={bottomNav__Resources}>
        <span>Support & Resources</span>
        <ChevronTopIcon />
      </div>
    </div>
  );
};

export default BottomNav;
