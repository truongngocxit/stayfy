import styles from "./BookingButton.module.scss";

const BookingButton = function ({ onClick, text, className }) {
  const { bookingBtn } = styles;
  return (
    <button className={`${bookingBtn} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default BookingButton;
