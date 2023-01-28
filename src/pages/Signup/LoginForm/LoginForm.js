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
import { useDispatch } from "react-redux";
import { activeUserActions } from "../../../redux-store/activeUserSlice";

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
      const response = await fetch(
        "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      );
      const data = await response.json();
      const cleansedData = Object.entries(data).map((e) => ({
        id: e[0],
        ...e[1],
      }));
      const retrievedUser = cleansedData.find(
        (data) => data.password === password && data.email === email
      );

      if (retrievedUser) {
        setSubmitState("hasSubmitted");
        reduxDispatch(activeUserActions.userLogin(retrievedUser));
      } else {
        setSubmitState("hasFailed");
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
      "You have successfully logged in. You will navigated to home page in 5 seconds";
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

  const { login, login__Email, login__Password, login__Actions } = styles;
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
          <SignupButton
            text="Login"
            isDisabled={formIsInvalid}
            tooltipTitle="Please fill in your info"
          />
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
            submitState={submitState}
            header={header}
            state={state}
            stateMessage={stateMessage}
            navigateMessage={navigateMessage}
            navigateSeconds={5}
            to="/signup"
            doAfterSubmit={doAfterSubmit}
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default LoginForm;
