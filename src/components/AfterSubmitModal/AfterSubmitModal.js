import styles from "./AfterSubmitModal.module.scss";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import CheckIcon from "../UI/SVG/CheckIcon";
import WarningIcon from "../UI/SVG/WarningIcon";
import CountdownLine from "./CountdownLine/CountdownLine";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AfterSubmitModal = function ({
  stateMessage = null,
  navigateMessage = null,
  header,
  state,
  doAfterSubmit,
  navigateSeconds,
  to,
}) {
  useEffect(() => {
    let timeoutId;
    if (state !== "loading") {
      timeoutId = setTimeout(() => {
        doAfterSubmit && doAfterSubmit();
      }, navigateSeconds * 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [state, doAfterSubmit, navigateSeconds]);

  const navigate = useNavigate();

  const handleNavigate = function () {
    doAfterSubmit && doAfterSubmit();
    to && navigate(to);
  };

  let icon;

  if (state === "loading") {
    icon = <LoadingSpinner className={afterSubmit__StateIconLoading} />;
  } else if (state === "success") {
    icon = <CheckIcon className={afterSubmit__StateIconSuccess} />;
  } else if (state === "failure") {
    icon = <WarningIcon className={afterSubmit__StateIconFailure} />;
  }

  return (
    <div className={afterSubmit}>
      <div className={afterSubmit__Header}>
        <div className={afterSubmit__StateIcon}>{icon}</div>
        <h2>{header}</h2>
      </div>
      <div
        className={`${afterSubmit__Message} ${
          stateMessage ? afterSubmit__MessageOk : ""
        }`}
      >
        <p>{stateMessage}</p>
        {navigateMessage && (
          <button type="button" onClick={handleNavigate}>
            {navigateMessage}
          </button>
        )}
      </div>
      {(state === "success" || state === "failure") && (
        <CountdownLine
          color={state === "failure" ? "#e30613" : ""}
          duration={navigateSeconds}
        />
      )}
    </div>
  );
};

export default AfterSubmitModal;

const {
  afterSubmit,
  afterSubmit__StateIcon,
  ["afterSubmit__StateIcon--Success"]: afterSubmit__StateIconSuccess,
  ["afterSubmit__StateIcon--Loading"]: afterSubmit__StateIconLoading,
  ["afterSubmit__StateIcon--Failure"]: afterSubmit__StateIconFailure,
  afterSubmit__Header,
  afterSubmit__Message,
  ["afterSubmit__Message--Ok"]: afterSubmit__MessageOk,
} = styles;
