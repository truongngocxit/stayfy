import styles from "./Checkout.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import BookingDetailAside from "./BookingDetailAside/BookingDetailAside";
import BookingButton from "./BookingInfoMain/BookingButton/BookingButton";
import BookingInfoMain from "./BookingInfoMain/BookingInfoMain";
import GuestBookingInfoContextProvider from "../../contexts/guestBookingInfoContext/GuestBookingInfoContextProvider";
import { createPortal } from "react-dom";
import Overlay from "../../components/UI/Overlay/Overlay";
import AfterSubmitModal from "./AfterSubmitModal/AfterSubmitModal";
import { useState } from "react";

const Checkout = function () {
  const [submitState, setSubmitState] = useState("yetSumit");
  const [submittingError, setSubmittingError] = useState(null);

  const handleIsSubmittingData = function () {
    setSubmitState("isSubmitting");
  };

  const handleHasSubmittedData = function () {
    setSubmitState("hasSubmitted");
  };

  const { checkout, checkout__Aside, checkout__Details, checkout__Btn } =
    styles;
  return (
    <>
      <TopNav hasSearchBar={false} />
      <div className={checkout}>
        <div className={checkout__Aside}>
          <BookingDetailAside />
        </div>
        <GuestBookingInfoContextProvider>
          <div className={checkout__Details}>
            <BookingInfoMain />
          </div>
          <BookingButton
            text="Book now"
            className={checkout__Btn}
            onSubmitting={handleIsSubmittingData}
            onHasSubmitted={handleHasSubmittedData}
          />
        </GuestBookingInfoContextProvider>
      </div>
      <StaticFooter />
      {submitState !== "yetSubmit" &&
        createPortal(
          <AfterSubmitModal submitState={submitState} />,
          document.getElementById("modal-root")
        )}
      {submitState !== "yetSubmit" &&
        createPortal(
          <Overlay zIndex="1200" />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default Checkout;
