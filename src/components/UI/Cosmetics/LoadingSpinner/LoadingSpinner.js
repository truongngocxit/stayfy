import styles from "./LoadingSpinner.module.scss";

export default function LoadingSpinner({ className }) {
  const { ldsRipple } = styles;
  return (
    <div className={`${ldsRipple} ${className}`}>
      <div></div>
      <div></div>
    </div>
  );
}
