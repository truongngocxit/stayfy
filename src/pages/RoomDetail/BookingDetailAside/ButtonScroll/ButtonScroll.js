import styles from "./ButtonScroll.module.scss";

const ButtonScroll = function ({ label, className, onClick }) {
  const { btnScroll } = styles;
  return (
    <button onClick={onClick} className={`${btnScroll} ${className}`}>
      {label}
    </button>
  );
};

export default ButtonScroll;
