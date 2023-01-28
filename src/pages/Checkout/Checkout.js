import styles from "./Checkout.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import BookingDetailAside from "./BookingDetailAside/BookingDetailAside";
import BookingButton from "./BookingInfoMain/BookingButton/BookingButton";
import BookingInfoMain from "./BookingInfoMain/BookingInfoMain";
import GuestBookingInfoContextProvider from "../../contexts/guestBookingInfoContext/GuestBookingInfoContextProvider";
import { createPortal } from "react-dom";
import Overlay from "../../components/UI/Overlay/Overlay";
import AfterSubmitModal from "../../components/AfterSubmitModal/AfterSubmitModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = function () {
  const [submitState, setSubmitState] = useState("yetSubmit");
  const [submittingError, setSubmittingError] = useState(null);

  const navigate = useNavigate();

  const handleIsSubmittingData = function () {
    setSubmitState("isSubmitting");
  };

  const handleHasSubmittedData = function () {
    setSubmitState("hasSubmitted");
  };

  const { checkout, checkout__Aside, checkout__Details, checkout__Btn } =
    styles;

  let header, state, stateMessage, navigateMessage;

  if (submitState === "isSubmitting") {
    header = "Your data is being processed";
    state = "loading";
    stateMessage = null;
    navigateMessage = null;
  } else if (submitState === "hasSubmitted") {
    header = "The host has received your info :)";
    state = "success";
    stateMessage =
      "Your data has been sent successfully to the host!. You will be navigated away in 5 seconds.";
    navigateMessage = "Or you could click here to go to home right now.";
  }

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
          <AfterSubmitModal
            header={header}
            state={state}
            stateMessage={stateMessage}
            navigateMessage={navigateMessage}
            doAfterSubmit={() => navigate("/")}
            navigateSeconds={5}
            to="/"
          />,
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
