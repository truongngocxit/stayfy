import styles from "./Checkout.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import BookingDetailAside from "./BookingDetailAside/BookingDetailAside";
import BookingButton from "./BookingInfoMain/BookingButton/BookingButton";
import BookingInfoMain from "./BookingInfoMain/BookingInfoMain";

const Checkout = function () {
  const { checkout, checkout__Aside, checkout__Details, checkout__Btn } =
    styles;
  return (
    <>
      <TopNav hasSearchBar={false} />
      <div className={checkout}>
        <div className={checkout__Aside}>
          <BookingDetailAside />
        </div>
        <div className={checkout__Details}>
          <BookingInfoMain />
        </div>
        <BookingButton text="Book now" className={checkout__Btn} />
      </div>
      <StaticFooter />
    </>
  );
};

export default Checkout;
