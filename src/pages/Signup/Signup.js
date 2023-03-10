import styles from "./Signup.module.scss";
import BareLogo from "../../components/UI/BareLogo/BareLogo";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import ChevronLeftIcon from "../../components/UI/SVG/ChevronLeftIcon";
import LoadingScreen from "../../components/UI/LoadingScreen/LoadingScreen";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SlideInMessage from "../../components/SlideInMessage/SlideInMessage";

const Signup = function ({ isLoggingIn = false }) {
  const [bgImageHasLoaded, setBgImgHasLoaded] = useState(false);

  const resizeObserverRef = useRef(null);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (entries) {
      if (entries[0].contentRect.width <= 505) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, []);

  const { state } = useLocation();
  const userIsActive = useSelector((state) => state.activeUser.isActive);

  const bgImageRef = useRef(null);

  const handleBgImageHasLoad = function (event) {
    setBgImgHasLoaded(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBgImgHasLoaded(true);
    }, 4500);

    return () => clearTimeout(timeoutId);
  }, []);

  const {
    signup,
    signup__Smaller,
    signup__Larger,
    signup__Image,
    signup__Form,
    signup__Form__Logo,
    signup__Form__Intro,
    signup__Form__Form,
    signup__Back,
  } = styles;
  return (
    <>
      <div
        className={`${signup} ${
          isMobileScreen ? signup__Smaller : signup__Larger
        }`}
      >
        <Link to="/" className={signup__Back}>
          <ChevronLeftIcon />

          <span>Back to home</span>
        </Link>
        {!isMobileScreen && (
          <div className={signup__Image}>
            <img
              src="https://images.unsplash.com/photo-1605181063694-e64a8e7a267f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="Signup background"
              ref={bgImageRef}
              onLoad={handleBgImageHasLoad}
            />
          </div>
        )}
        <div
          className={signup__Form}
          {...(isMobileScreen && {
            style: {
              gridColumn: "1 / -1",
            },
          })}
        >
          <div className={signup__Form__Logo}>
            <BareLogo />
          </div>
          <div className={signup__Form__Intro}>
            <h2>Welcome to Stayfy</h2>
            <p>Deliver authentic stays and travelling experiences</p>
          </div>
          <div className={signup__Form__Form}>
            {isLoggingIn ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
      {!bgImageHasLoaded &&
        createPortal(
          <LoadingScreen />,
          document.getElementById("overlay-root")
        )}

      {!userIsActive && state && (
        <SlideInMessage state={state?.state} text={state?.message} />
      )}
    </>
  );
};

export default Signup;
