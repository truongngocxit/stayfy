import styles from "./LineBreak.module.scss";

export default function LineBreak({ className }) {
  const { lineBreak } = styles;
  return <div className={`${lineBreak} ${className}`}></div>;
}
