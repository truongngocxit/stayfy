import styles from "./BookingDetailModal.module.scss";
import BookingDetailAside from "../../BookingDetailAside/BookingDetailAside";
import CloseIcon from "../../../../components/UI/SVG/CloseIcon";

const BookingDetailModal = function ({ roomInfo, onCloseModal }) {
  const { bookingDetail, bookingDetail__CloseBtn } = styles;
  return (
    <div className={bookingDetail}>
      <button className={bookingDetail__CloseBtn} onClick={onCloseModal}>
        <CloseIcon />
      </button>
      <BookingDetailAside {...roomInfo} />
    </div>
  );
};

export default BookingDetailModal;
