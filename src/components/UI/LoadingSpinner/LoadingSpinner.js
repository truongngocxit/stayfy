import styles from "./LoadingSpinner.module.scss";

export default function LoadingSpinner({ className }) {
  const { loadingSpinner } = styles;
  return (
    <div className={`${loadingSpinner} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
