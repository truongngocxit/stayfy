import styles from "./Checkout.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import BookingDetailAside from "./BookingDetailAside/BookingDetailAside";
import BookingInfoMain from "./BookingInfoMain/BookingInfoMain";
const Checkout = function () {
  const { checkout, checkout__Aside, checkout__Details } = styles;
  return (
    <>
      <TopNav />
      <div className={checkout}>
        <div className={checkout__Aside}>
          <BookingDetailAside />
        </div>
        <div className={checkout__Details}>
          <BookingInfoMain />
        </div>
      </div>
      <StaticFooter />
    </>
  );
};

export default Checkout;
