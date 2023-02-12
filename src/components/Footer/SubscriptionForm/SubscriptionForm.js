import styles from "./SubscriptionForm.module.scss";
import Input from "../../Input/Input";
import useInput from "../../../custom-hooks/useInput";
import LoadingScreen from "../../../pages/Profile/LoadingScreen/LoadingScreen";
import Button from "../../Button/Button";
import SlideInMessage from "../../SlideInMessage/SlideInMessage";
import { showAndHideNotification } from "../../../redux-store/notificationSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";

const SubscriptionForm = function ({ className }) {
  const reduxDispatch = useDispatch();

  const {
    input,
    handleInputChange,
    isTyping,
    handleStopTyping,
    handleStartTyping,
    setInput,
    resetInput,
    inputHasError,
    inputIsInvalid,
  } = useInput((email) => email.includes("@") && email.includes("."));

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitSubscription = async function (event) {
    event.preventDefault();
    setIsSubmitting(true);

    await axios({
      method: "POST",
      url: "https://stayfy-backend.onrender.com/add-subscription",
      data: { email: input },
    });
    resetInput();
    setIsSubmitting(false);
    reduxDispatch(
      showAndHideNotification({
        text: "Thank you for subscribing!",
        state: "successful",
        secs: 4,
      })
    );
  };

  const { subscription, subscription__Btn } = styles;

  return (
    <>
      <form
        className={`${subscription} ${className}`}
        onSubmit={handleSubmitSubscription}
      >
        <h3>Get special offers and more from Stayfy</h3>

        <Input
          label="Your email"
          value={input}
          onChange={handleInputChange}
          isTyping={isTyping}
          onBlur={handleStopTyping}
          onFocus={handleStartTyping}
          hasError={inputHasError}
          errorMessage="Please enter a valid email"
        />

        <Button isDisabled={inputIsInvalid} className={subscription__Btn}>
          Subscribe
        </Button>
      </form>
      {isSubmitting && <LoadingScreen zIndex={2000} />}
    </>
  );
};

export default SubscriptionForm;
