import styles from "./CountdownLine.module.scss";

const CountdownLine = function (className) {
  const { countdownLine } = styles;
  return <div className={countdownLine} />;
};

export default CountdownLine;
