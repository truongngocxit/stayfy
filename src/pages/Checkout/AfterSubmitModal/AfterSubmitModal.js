import styles from "./AfterSubmitModal.module.scss";
import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import CheckIcon from "../../../components/UI/SVG/CheckIcon";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const AfterSubmitModal = function ({ submitState }) {
  const [dotNum, setDotNum] = useState(0);
  const [countdownLineWidthPerc, setCountdownLineWidthPerc] = useState(100);
  const countDownLineRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCountdownLineWidthPerc(countdownLineWidthPerc - 1),
      50
    );
    countDownLineRef.current.style.width = `${countdownLineWidthPerc}%`;
    return () => clearInterval(intervalId);
  }, [countdownLineWidthPerc]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (dotNum < 3) {
        setDotNum((n) => n + 1);
      } else {
        setDotNum(0);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [dotNum]);

  const {
    afterSubmit,
    afterSubmit__StateIcon,
    afterSubmit__StateIcon__Success,
    afterSubmit__StateIcon__Loading,
    afterSubmit__CountdownLine,
    afterSubmit__Header,
    afterSubmit__Message,
    afterSubmit__Message__Ok,
  } = styles;
  return (
    <div className={afterSubmit}>
      <div className={afterSubmit__Header}>
        <div className={afterSubmit__StateIcon}>
          {submitState === "isSubmitting" && (
            <LoadingSpinner className={afterSubmit__StateIcon__Loading} />
          )}
          {submitState === "hasSubmitted" && (
            <CheckIcon className={afterSubmit__StateIcon__Success} />
          )}
        </div>

        <h2>
          {submitState === "isSubmitting" && (
            <>
              Your data is being processed<span>{".".repeat(dotNum)}</span>
            </>
          )}

          {submitState === "hasSubmitted" &&
            "The host has received your data :)"}
        </h2>
      </div>
      <div
        className={`${afterSubmit__Message} ${
          submitState === "hasSubmitted" ? afterSubmit__Message__Ok : ""
        }`}
      >
        <p>
          Your data has been sent successfully to the host!. You will be
          navigated away in 5 seconds.
        </p>
        <Link to="/">Or you could click here to go to home right now.</Link>
      </div>
      {submitState === "hasSubmitted" && (
        <div className={afterSubmit__CountdownLine} ref={countDownLineRef} />
      )}
    </div>
  );
};

export default AfterSubmitModal;
