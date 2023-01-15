import styles from "./Signup.module.scss";
import BareLogo from "../../components/UI/BareLogo/BareLogo";
import SignupForm from "./SignupForm/SignupForm";
import ChevronLeftIcon from "../../components/UI/SVG/ChevronLeftIcon";
import { Link } from "react-router-dom";
const Signup = function () {
  const {
    signup,
    signup__Image,
    signup__Form,
    signup__Form__Logo,
    signup__Form__Intro,
    signup__Back,
  } = styles;
  return (
    <>
      <div className={signup}>
        <Link to="/" className={signup__Back}>
          <ChevronLeftIcon />
          <span>Back to home</span>
        </Link>
        <div className={signup__Image}>
          <img
            src="https://images.unsplash.com/photo-1605181063694-e64a8e7a267f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="signup"
          />
        </div>
        <div className={signup__Form}>
          <div className={signup__Form__Logo}>
            <BareLogo />
          </div>
          <div className={signup__Form__Intro}>
            <h2>Welcome to Stayfy</h2>
            <p>Deliver authentic stays and travelling experiences</p>
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
