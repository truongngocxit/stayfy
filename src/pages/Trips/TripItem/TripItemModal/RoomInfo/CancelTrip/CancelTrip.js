import styles from "./CancelTrip.module.scss";
import useInput from "../../../../../../custom-hooks/useInput";
import Input from "../../../../../../components/Input/Input";

const CancelTrip = function () {
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

  const { cancel, cancel__Btn } = styles;
  return (
    <form className={cancel}>
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
        errorMEssage="Cancellation reason must NOT be empty"
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
      <button className={cancel__Btn}>Cancel trip</button>
    </form>
  );
};

export default CancelTrip;
