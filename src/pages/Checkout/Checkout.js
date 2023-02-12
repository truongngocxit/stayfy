import styles from "./Checkout.module.scss";

import BookingDetailAside from "./BookingDetailAside/BookingDetailAside";
import BookingButton from "./BookingButton/BookingButton";
import BookingInfoMain from "./BookingInfoMain/BookingInfoMain";
import GuestBookingInfoContextProvider from "../../contexts/guestBookingInfoContext/GuestBookingInfoContextProvider";
import { createPortal } from "react-dom";
import Overlay from "../../components/UI/Overlay/Overlay";
import AfterSubmitModal from "../../components/AfterSubmitModal/AfterSubmitModal";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import SmallerScreenBottomNav from "./SmallerScreenBottomNav/SmallerScreenBottomNav";
import { bookingInfoActions } from "../../redux-store/bookingInfoSlice";
import { searchQueryActions } from "../../redux-store/searchQuerySlice";

const Checkout = function () {
  const [submitState, setSubmitState] = useState("yetSubmit");
  const roomInfo = useSelector((state) => state.bookingInfo.roomInfo);
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  const resizeObserverRef = useRef(null);
  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      if (entries[0].contentRect.width <= 744) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  const handleIsSubmittingData = function () {
    setSubmitState("isSubmitting");
  };

  const handleHasSubmittedData = function () {
    setSubmitState("hasSubmitted");
  };

  const onAfterSubmit = function () {
    reduxDispatch(bookingInfoActions.resetBookingInfo());
    reduxDispatch(searchQueryActions.resetSearchQuery());
    navigate("/");
  };

  const {
    checkout,
    checkout__SmallerScreen,
    checkout__LargerScreen,
    checkout__Aside,
    checkout__Details,
    checkout__Btn,
  } = styles;

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
      <GuestBookingInfoContextProvider>
        <div
          className={`${checkout} ${
            !isSmallerScreen ? checkout__LargerScreen : checkout__SmallerScreen
          }`}
        >
          {!isSmallerScreen && (
            <div className={checkout__Aside}>
              <BookingDetailAside {...roomInfo} />
            </div>
          )}

          <div className={checkout__Details}>
            <BookingInfoMain />
          </div>
          {!isSmallerScreen && (
            <BookingButton
              text="Book now"
              className={checkout__Btn}
              onSubmitting={handleIsSubmittingData}
              onHasSubmitted={handleHasSubmittedData}
            />
          )}
        </div>

        {isSmallerScreen && (
          <SmallerScreenBottomNav
            roomInfo={roomInfo}
            onSubmitting={handleIsSubmittingData}
            onHasSubmitted={handleHasSubmittedData}
          />
        )}
      </GuestBookingInfoContextProvider>
      {submitState !== "yetSubmit" &&
        createPortal(
          <AfterSubmitModal
            header={header}
            state={state}
            stateMessage={stateMessage}
            navigateMessage={navigateMessage}
            doAfterSubmit={onAfterSubmit}
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
