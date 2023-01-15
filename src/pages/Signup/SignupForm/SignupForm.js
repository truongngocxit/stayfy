import styles from "./SignupForm.module.scss";
import SignupInput from "../SignupInput/SignupInput";
import SignupButton from "../SignupButton/SignupButton";
import LoginButton from "../LoginButton/LoginButton";
const SignupForm = function () {
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
    <form className={signupForm}>
      <SignupInput
        id="firstName"
        label="First name"
        className={signupForm__firstName}
      />
      <SignupInput
        id="lastName"
        label="Last name"
        className={signupForm__lastName}
      />
      <SignupInput id="email" label="Email" className={signupForm__Email} />
      <SignupInput
        id="phone"
        label="Phone number"
        className={signupForm__Phone}
      />
      <SignupInput
        id="password"
        label="Password"
        className={signupForm__Password}
      />
      <SignupInput
        id="passwordConfirm"
        label="Confirm password"
        className={signupForm__PasswordConfirm}
      />
      <div className={signupForm__Actions}>
        <SignupButton text="Sign up" />
        <LoginButton text="Already have an account? Login" />
      </div>
    </form>
  );
};

export default SignupForm;
