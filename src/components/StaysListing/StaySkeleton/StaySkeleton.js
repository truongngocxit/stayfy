import styles from "./StaySkeleton.module.scss";

const StaySkeleton = function ({ className }) {
  const {
    skeleton,
    skeleton__Image,
    skeleton__Info,
    skeleton__Info__Name,
    skeleton__Info__Review,
    skeleton__Info__Location,
    skeleton__Info__Price,
  } = styles;
  return (
    <div className={skeleton}>
      <div className={skeleton__Image} />
      <div className={skeleton__Info}>
        <div className={skeleton__Info__Name} />
        <div className={skeleton__Info__Review} />
        <div className={skeleton__Info__Location} />
        <div className={skeleton__Info__Price} />
      </div>
    </div>
  );
};

export default StaySkeleton;
