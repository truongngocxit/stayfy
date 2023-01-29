import styles from "./LoadingSpinner.module.scss";

export default function LoadingSpinner({
  className,
  color = "#ffd000",
  width = "0.3rem",
}) {
  const { loadingSpinner } = styles;
  const borderStyle = {
    borderColor: `${color} transparent transparent transparent`,
    borderWidth: width,
  };
  return (
    <div className={`${loadingSpinner} ${className}`}>
      <div style={borderStyle}></div>
      <div style={borderStyle}></div>
      <div style={borderStyle}></div>
      <div style={borderStyle}></div>
    </div>
  );
}
