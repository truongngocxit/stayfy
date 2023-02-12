import styles from "./LoginForm.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";
import SignupButton from "../SignupButton/SignupButton";
import Input from "../../../components/Input/Input";
import useInput from "../../../custom-hooks/useInput";
import Overlay from "../../../components/UI/Overlay/Overlay";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AfterSubmitModal from "../../../components/AfterSubmitModal/AfterSubmitModal";
import Button from "../../../components/Button/Button";
import { useDispatch } from "react-redux";
import { activeUserActions } from "../../../redux-store/activeUserSlice";
import axios from "axios";

const LoginForm = function () {
  const [submitState, setSubmitState] = useState("yetSubmit");
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  const {
    input: email,
    handleInputChange: handleEmailChange,
    isTyping: isTypingEmail,
    handleStopTyping: handleStopTypingEmail,
    handleStartTyping: handleStartTypingEmail,
    inputHasError: emailHasError,
    inputIsInvalid: emailIsInvalid,
    resetInput: resetEmail,
  } = useInput((email) => email.trim() !== "");

  const {
    input: password,
    handleInputChange: handlePasswordChange,
    isTyping: isTypingPassword,
    handleStopTyping: handleStopTypingPassword,
    handleStartTyping: handleStartTypingPassword,
    inputHasError: passwordHasError,
    inputIsInvalid: passwordIsInvalid,
    resetInput: resetPassword,
  } = useInput((password) => password.trim() !== "");

  const formIsInvalid = emailIsInvalid || passwordIsInvalid;

  const handleSubmitUserData = function (event) {
    event.preventDefault();
    if (formIsInvalid) return;

    (async function () {
      setSubmitState("isSubmitting");

      const backendResponse = await axios({
        method: "POST",
        url: "https://stayfy-backend.onrender.com/login",
        data: {
          password,
          email,
        },
      });

      const userData = backendResponse.data;

      if (userData.error) {
        setSubmitState("hasFailed");
      } else {
        setSubmitState("hasSubmitted");
        const cleansedUserTrips = Object.entries({
          ...userData.upcomingTrips,
        }).map((trip) => ({
          userTripId: trip[0],
          bookingId: trip[1].bookingId,
        }));

        const cleansedRetrivedUser = {
          ...userData,
          upcomingTrips: cleansedUserTrips,
        };

        localStorage.setItem("loginInfo", JSON.stringify(cleansedRetrivedUser));

        reduxDispatch(activeUserActions.userLogin(cleansedRetrivedUser));
      }

      resetEmail();
      resetPassword();
    })();
  };

  let state, header, stateMessage, navigateMessage, doAfterSubmit;

  if (submitState === "isSubmitting") {
    header = "Your data is being processed";
    state = "loading";
    stateMessage = null;
    navigateMessage = null;
  } else if (submitState === "hasSubmitted") {
    header = "Welcome back to Homefy :)";
    state = "success";
    stateMessage =
      "You have successfully logged in. You will be navigated to home page in 5 seconds";
    navigateMessage = "Or you could click here to go to home right now";
    doAfterSubmit = () => navigate("/");
  } else if (submitState === "hasFailed") {
    header = "Wrong email or password";
    state = "failure";
    stateMessage = "You have typed in the wrong password. Please retype.";
    navigateMessage =
      "Or if you have not signed up to us. Create an account now";
    doAfterSubmit = () => setSubmitState("yetSubmit");
  }

  const {
    login,
    login__Email,
    login__Password,
    login__Actions,
    login__Actions__Btn,
  } = styles;
  return (
    <>
      <form className={login} onSubmit={handleSubmitUserData}>
        <Input
          label="Your Email"
          className={login__Email}
          value={email}
          errorMessage="Email must NOT be empty"
          hasError={emailHasError}
          onChange={handleEmailChange}
          isTyping={isTypingEmail}
          onFocus={handleStartTypingEmail}
          onBlur={handleStopTypingEmail}
        />
        <Input
          label="Password"
          className={login__Password}
          type="password"
          value={password}
          errorMessage="Password must NOT be empty"
          hasError={passwordHasError}
          onChange={handlePasswordChange}
          isTyping={isTypingPassword}
          onFocus={handleStartTypingPassword}
          onBlur={handleStopTypingPassword}
        />
        <div className={login__Actions}>
          <Button
            className={login__Actions__Btn}
            isDisabled={formIsInvalid}
            errorMessage="Please fill in your info"
          >
            Login
          </Button>

          <NavigationLink text="Don't have an account? Sign up" to="/signup" />
        </div>
      </form>
      {submitState !== "yetSubmit" &&
        createPortal(
          <Overlay zIndex={1200} />,
          document.getElementById("overlay-root")
        )}

      {submitState !== "yetSubmit" &&
        createPortal(
          <AfterSubmitModal
            header={header}
            state={state}
            stateMessage={stateMessage}
            navigateMessage={navigateMessage}
            navigateSeconds={5}
            to="/profile"
            doAfterSubmit={doAfterSubmit}
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default LoginForm;
