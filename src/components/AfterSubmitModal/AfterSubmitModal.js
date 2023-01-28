import styles from "./AfterSubmitModal.module.scss";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import CheckIcon from "../UI/SVG/CheckIcon";
import WarningIcon from "../UI/SVG/WarningIcon";
import CountdownLine from "./CountdownLine/CountdownLine";
import { Link } from "react-router-dom";
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

  const {
    afterSubmit,
    afterSubmit__StateIcon,
    afterSubmit__StateIcon__Success,
    afterSubmit__StateIcon__Loading,
    afterSubmit__StateIcon__Failure,
    afterSubmit__Header,
    afterSubmit__Message,
    afterSubmit__Message__Ok,
  } = styles;

  let icon;

  if (state === "loading") {
    icon = <LoadingSpinner className={afterSubmit__StateIcon__Loading} />;
  } else if (state === "success") {
    icon = <CheckIcon className={afterSubmit__StateIcon__Success} />;
  } else if (state === "failure") {
    icon = <WarningIcon className={afterSubmit__StateIcon__Failure} />;
  }

  return (
    <div className={afterSubmit}>
      <div className={afterSubmit__Header}>
        <div className={afterSubmit__StateIcon}>{icon}</div>
        <h2>{header}</h2>
      </div>
      <div
        className={`${afterSubmit__Message} ${
          stateMessage ? afterSubmit__Message__Ok : ""
        }`}
      >
        <p>{stateMessage}</p>
        {navigateMessage && <Link to={to}>{navigateMessage}</Link>}
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
