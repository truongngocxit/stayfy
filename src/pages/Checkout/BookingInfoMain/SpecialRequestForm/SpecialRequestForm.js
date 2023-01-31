import styles from "./SpecialRequestForm.module.scss";
import { useContext } from "react";
import { guestSpecialRequestContext } from "../../../../contexts/guestBookingInfoContext/guestSpecialRequestContext";
import Input from "../../../../components/Input/Input";

const SpecialRequestForm = function () {
  const {
    input: specialRequest,
    handleInputChange: handleSpecialRequestChange,
    isTyping: isTypingRequest,
    handleStopTyping: handleStopTypingRequest,
    handleStartTyping: handleStartTypingRequest,
  } = useContext(guestSpecialRequestContext);

  const {
    requestForm,
    requestForm__Heading,
    requestForm__Description,
    requestForm__Form,
  } = styles;
  return (
    <div className={requestForm}>
      <h3 className={requestForm__Heading}>Special requests</h3>
      <p className={requestForm__Description}>
        Special requests cannot be guaranteed, but the property will do its best
        to meet your needs. You can always make a special request after your
        booking is complete!
      </p>

      <Input
        label="Please write your requests in English or Vietnamese."
        isTextarea={true}
        rows={6}
        value={specialRequest}
        onChange={handleSpecialRequestChange}
        onBlur={handleStopTypingRequest}
        onFocus={handleStartTypingRequest}
        isTyping={isTypingRequest}
        isValidate={false}
        hasError={false}
      />
    </div>
  );
};

export default SpecialRequestForm;
