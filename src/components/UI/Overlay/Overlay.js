import styles from "./Overlay.module.scss";

export default function Overlay({ onClick, zIndex = 100 }) {
  const { overlay } = styles;
  return (
    <div className={overlay} onClick={onClick} style={{ zIndex: zIndex }}></div>
  );
}
