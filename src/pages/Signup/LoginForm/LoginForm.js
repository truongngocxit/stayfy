import styles from "./LoginForm.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";
import SignupButton from "../SignupButton/SignupButton";
import Input from "../../../components/Input/Input";
import useInput from "../../../custom-hooks/useInput";

const LoginForm = function () {
  const {
    input: email,
    handleInputChange: handleEmailChange,
    isTyping: isTypingEmail,
    handleStopTyping: handleStopTypingEmail,
    handleStartTyping: handleStartTypingEmail,
    inputHasError: emailHasError,
    inputIsInvalid: emailIsInvalid,
  } = useInput((email) => email.trim() !== "");

  const {
    input: password,
    handleInputChange: handlePasswordChange,
    isTyping: isTypingPassword,
    handleStopTyping: handleStopTypingPassword,
    handleStartTyping: handleStartTypingPassword,
    inputHasError: passwordHasError,
    inputIsInvalid: passwordIsInvalid,
  } = useInput((password) => password.trim() !== "");

  const formIsInvalid = emailIsInvalid || passwordIsInvalid;

  const handleSubmitUserData = function (event) {
    event.preventDefault();
    if (formIsInvalid) return;
  };

  const { login, login__Email, login__Password, login__Actions } = styles;
  return (
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
  );
};

export default LoginForm;
