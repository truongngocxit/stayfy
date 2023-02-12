import styles from "./CancelTrip.module.scss";
import useInput from "../../../../../../custom-hooks/useInput";
import Input from "../../../../../../components/Input/Input";
import SettingButton from "../../../../../Profile/SettingButton/SettingButton";
import useCancelTrip from "../../../../../../custom-hooks/useCancelTrip";
import { createPortal } from "react-dom";
import LoadingScreen from "../../../../../Profile/LoadingScreen/LoadingScreen";
import Button from "../../../../../../components/Button/Button";

const CancelTrip = function ({ bookingId, userTripId, onCloseModal }) {
  const { isCancelling, error, cancelTrip } = useCancelTrip();

  const {
    input: reason,
    handleInputChange: handleReasonChange,
    isTyping: isTypingReason,
    handleStartTyping: handleStartTypingReason,
    handleStopTyping: handleStopTypingReason,
    inputHasError: reasonHasError,
    inputIsInvalid: reasonIsInvalid,
  } = useInput((reason) => reason.trim() !== "");

  const {
    input: confirm,
    handleInputChange: handleConfirmChange,
    isTyping: isTypingConfirm,
    handleStartTyping: handleStartTypingConfirm,
    handleStopTyping: handleStopTypingConfirm,
    inputHasError: confirmHasError,
    inputIsInvalid: confirmIsInvalid,
  } = useInput((confirm) => confirm === "CANCEL");

  const handleConfirmCancel = function (event) {
    event.preventDefault();

    cancelTrip(bookingId, userTripId, onCloseModal);
  };

  const { cancel, cancel__Btn } = styles;
  return (
    <>
      <form className={cancel} onSubmit={handleConfirmCancel}>
        <Input
          isTextarea={true}
          rows={7}
          label="Could your clarify why you want to cancel this trip?"
          value={reason}
          onChange={handleReasonChange}
          isTyping={isTypingReason}
          onBlur={handleStopTypingReason}
          onFocus={handleStartTypingReason}
          hasError={reasonHasError}
          errorMessage="Cancellation reason must NOT be empty"
        />
        <Input
          label="Please type CANCEL so we know you're not canceling by accident"
          value={confirm}
          onChange={handleConfirmChange}
          isTyping={isTypingConfirm}
          onBlur={handleStopTypingConfirm}
          onFocus={handleStartTypingConfirm}
          hasError={confirmHasError}
          errorMessage="Are you sure you're typing 'CANCEL'"
        />
        <SettingButton
          text="Cancel trip"
          className={cancel__Btn}
          isDisabled={confirmIsInvalid || reasonIsInvalid}
        />
        <Button>Cancel trip</Button>
      </form>
      {isCancelling &&
        createPortal(
          <LoadingScreen />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default CancelTrip;
