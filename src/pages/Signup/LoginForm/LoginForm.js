import SignupInput from "../SignupInput/SignupInput";
import styles from "./LoginForm.module.scss";
import LoginButton from "../LoginButton/LoginButton";
import SignupButton from "../SignupButton/SignupButton";

const LoginForm = function () {
  const { login, login__Email, login__Password, login__Actions } = styles;
  return (
    <form className={login}>
      <SignupInput label="Phone number or Email" className={login__Email} />
      <SignupInput label="Password" className={login__Password} />
      <div className={login__Actions}>
        <SignupButton text="Login" />
        <LoginButton text="Don't have an account? Sign up" />
      </div>
    </form>
  );
};

export default LoginForm;
