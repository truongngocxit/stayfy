import styles from "./BookingDetailAside.module.scss";
import AsideHead from "./AsideHead/AsideHead";
import AsideInfo from "./AsideInfo/AsideInfo";
import AsideRateSummary from "./AsideRateSummary/AsideRateSummary";

const BookingDetailAside = function ({ stickyNavHeight }) {
  const { bookingDetail, bookingDetail__Btn, bookingDetail__Fee } = styles;
  return (
    <div className={bookingDetail} style={{ top: `${40 + stickyNavHeight}px` }}>
      <AsideHead price={29} stars={4.7} />
      <AsideInfo />
      <AsideRateSummary />
      <button className={bookingDetail__Btn}>Reserve</button>
    </div>
  );
};

export default BookingDetailAside;
