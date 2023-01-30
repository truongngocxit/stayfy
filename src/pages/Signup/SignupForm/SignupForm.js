import styles from "./SignupForm.module.scss";
import Input from "../../../components/Input/Input";
import SignupButton from "../SignupButton/SignupButton";
import NavigationLink from "../NavigationLink/NavigationLink";
import useInput from "../../../custom-hooks/useInput";
import { createPortal } from "react-dom";
import Overlay from "../../../components/UI/Overlay/Overlay";
import AfterSubmitModal from "../../../components/AfterSubmitModal/AfterSubmitModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = function () {
  const navigate = useNavigate();
  const [submitState, setSubmitState] = useState("yetSubmit");
  const {
    input: firstName,
    handleInputChange: handleFirstNameChange,
    isTyping: isTypingFirstName,
    handleStopTyping: handleStopTypingFirstName,
    handleStartTyping: handleStartTypingFirstName,
    inputHasError: firstNameHasError,
    inputIsInvalid: firstNameIsInvalid,
  } = useInput((firstName) => firstName.trim() !== "");

  const {
    input: lastName,
    handleInputChange: handleLastNameChange,
    isTyping: isTypingLastName,
    handleStopTyping: handleStopTypingLastName,
    handleStartTyping: handleStartTypingLastName,
    inputHasError: lastNameHasError,
    inputIsInvalid: lastNameIsInvalid,
  } = useInput((lastName) => lastName.trim() !== "");

  const {
    input: email,
    handleInputChange: handleEmailChange,
    isTyping: isTypingEmail,
    handleStopTyping: handleStopTypingEmail,
    handleStartTyping: handleStartTypingEmail,
    inputHasError: emailHasError,
    inputIsInvalid: emailIsInvalid,
  } = useInput((email) => email.includes("@") && email.includes("."));

  const {
    input: phone,
    handleInputChange: handlePhoneChange,
    isTyping: isTypingPhone,
    handleStopTyping: handleStopTypingPhone,
    handleStartTyping: handleStartTypingPhone,
    inputHasError: phoneHasError,
    inputIsInvalid: phoneIsInvalid,
  } = useInput(
    (phone) => phone.trim() !== "" && !isNaN(-phone) && phone.length === 10
  );

  const {
    input: password,
    handleInputChange: handlePasswordChange,
    isTyping: isTypingPassword,
    handleStopTyping: handleStopTypingPassword,
    handleStartTyping: handleStartTypingPassword,
    inputHasError: passwordHasError,
    inputIsInvalid: passwordIsInvalid,
  } = useInput(
    (password) =>
      !password.includes(" ") &&
      password.length >= 10 &&
      password.match(/\W|_/g)
  );

  const {
    input: confirmPassword,
    handleInputChange: handleConfirmPasswordChange,
    isTyping: isTypingConfirmPassword,
    handleStopTyping: handleStopTypingConfirmPassword,
    handleStartTyping: handleStartTypingConfirmPassword,
    inputHasError: confirmPasswordHasError,
    inputIsInvalid: confirmPasswordIsInvalid,
  } = useInput((confirmPassword) => confirmPassword === password);

  const formIsInvalid =
    firstNameIsInvalid ||
    lastNameIsInvalid ||
    emailIsInvalid ||
    phoneIsInvalid ||
    passwordIsInvalid ||
    confirmPasswordIsInvalid;

  const handleSubmitInfo = function (event) {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      password,
      phone,
      email,
      upcomingtrips: [],
      profileImage:
        "https://firebasestorage.googleapis.com/v0/b/stayfy-d4fc1.appspot.com/o/misc%2Fplaceholder-profile-image.png?alt=media&token=d7ee83a6-7b08-49e1-9d75-14de009335c9",
    };

    (async function () {
      setSubmitState("isSubmitting");
      await fetch(
        "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      setTimeout(() => {
        setSubmitState("hasSubmitted");
      }, 4000);
    })();
  };

  let header, state, stateMessage, navigateMessage, doAfterSubmit;

  if (submitState === "isSubmitting") {
    header = "Your data is being processed";
    state = "loading";
    stateMessage = null;
    navigateMessage = null;
    doAfterSubmit = null;
  } else if (submitState === "hasSubmitted") {
    header = "Welcome to Homefy";
    state = "success";
    stateMessage =
      "You have successfully signed up to Homefy. You will be navigated away to home in 5 seconds";
    navigateMessage = "Or you could click here to go to home right now.";
    doAfterSubmit = () => navigate("/");
  }

  const {
    signupForm,
    signupForm__Actions,
    signupForm__firstName,
    signupForm__lastName,
    signupForm__Email,
    signupForm__Phone,
    signupForm__Password,
    signupForm__PasswordConfirm,
  } = styles;
  return (
    <>
      <form className={signupForm} onSubmit={handleSubmitInfo}>
        <Input
          className={signupForm__firstName}
          id="firstName"
          errorMessage="Invalid first name"
          hasError={firstNameHasError}
          label="First name"
          value={firstName}
          onChange={handleFirstNameChange}
          isTyping={isTypingFirstName}
          onFocus={handleStartTypingFirstName}
          onBlur={handleStopTypingFirstName}
        />
        <Input
          className={signupForm__lastName}
          id="lastName"
          errorMessage="Invalid last name"
          hasError={lastNameHasError}
          label="Last name"
          value={lastName}
          onChange={handleLastNameChange}
          isTyping={isTypingLastName}
          onFocus={handleStartTypingLastName}
          onBlur={handleStopTypingLastName}
        />
        <Input
          id="email"
          className={signupForm__Email}
          errorMessage="Invalid email (includes domain name)"
          hasError={emailHasError}
          label="Email address"
          value={email}
          onChange={handleEmailChange}
          isTyping={isTypingEmail}
          onFocus={handleStartTypingEmail}
          onBlur={handleStopTypingEmail}
        />
        <Input
          id="phone"
          className={signupForm__Phone}
          errorMessage="Invalid phone (= 10 numbers)"
          hasError={phoneHasError}
          label="Phone number"
          value={phone}
          onChange={handlePhoneChange}
          isTyping={isTypingPhone}
          onFocus={handleStartTypingPhone}
          onBlur={handleStopTypingPhone}
        />
        <Input
          id="password"
          className={signupForm__Password}
          label="Password"
          type="password"
          errorMessage="Must > 10 characters and contains > 1 special character"
          hasError={passwordHasError}
          value={password}
          onChange={handlePasswordChange}
          isTyping={isTypingPassword}
          onFocus={handleStartTypingPassword}
          onBlur={handleStopTypingPassword}
        />
        <Input
          id="passwordConfirm"
          label="Confirm password"
          className={signupForm__PasswordConfirm}
          type="password"
          errorMessage="Must be the same as the password you gave"
          hasError={confirmPasswordHasError}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          isTyping={isTypingConfirmPassword}
          onFocus={handleStartTypingConfirmPassword}
          onBlur={handleStopTypingConfirmPassword}
        />
        <div className={signupForm__Actions}>
          <SignupButton text="Sign up" isDisabled={formIsInvalid} />
          <NavigationLink text="Already have an account? Login" to="/login" />
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
            doAfterSubmit={doAfterSubmit}
            navigateSeconds={5}
            to="/"
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default SignupForm;
