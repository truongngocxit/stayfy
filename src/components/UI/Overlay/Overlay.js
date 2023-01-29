import styles from "./Overlay.module.scss";

export default function Overlay({
  onClick,
  zIndex = 100,
  backgroundOpacity = 0.4,
}) {
  const { overlay } = styles;
  return (
    <div
      className={overlay}
      onClick={onClick}
      style={{
        zIndex: zIndex,
        backgroundColor: `rgba(51, 51, 51, ${backgroundOpacity})`,
      }}
    ></div>
  );
}
