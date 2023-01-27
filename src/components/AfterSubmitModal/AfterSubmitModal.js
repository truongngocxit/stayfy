import styles from "./AfterSubmitModal.module.scss";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import CheckIcon from "../UI/SVG/CheckIcon";
import CountdownLine from "./CountdownLine/CountdownLine";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AfterSubmitModal = function ({
  submitState,
  successMessage,
  navigateMessage,
  loadingMessage,
  to,
}) {
  const navigate = useNavigate();
  const [dotNum, setDotNum] = useState(0);

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

  useEffect(() => {
    let timeoutId;
    if (submitState === "hasSubmitted") {
      timeoutId = setTimeout(() => {
        navigate(to);
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [submitState, navigate, to]);

  const {
    afterSubmit,
    afterSubmit__StateIcon,
    afterSubmit__StateIcon__Success,
    afterSubmit__StateIcon__Loading,
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
              {loadingMessage}
              <span>{".".repeat(dotNum)}</span>
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
        <p>{successMessage}</p>
        <Link to={to}>{navigateMessage}</Link>
      </div>
      {submitState === "hasSubmitted" && <CountdownLine />}
    </div>
  );
};

export default AfterSubmitModal;
