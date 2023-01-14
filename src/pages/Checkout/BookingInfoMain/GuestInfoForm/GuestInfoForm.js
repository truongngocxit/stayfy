import styles from "./GuestInfoForm.module.scss";
import InfoInput from "./InfoInput/InfoInput";
import InfoRadio from "./InfoRadio/InfoRadio";

const GuestInfoForm = function () {
  const {
    infoForm,
    infoForm__Container,
    infoForm__FName,
    infoForm__LName,
    infoForm__Email,
    infoForm__Phone,
  } = styles;
  return (
    <div className={infoForm__Container}>
      <form className={infoForm}>
        <h3>Your information</h3>
        <InfoInput label="First name" className={infoForm__FName} />
        <InfoInput label="Last name" className={infoForm__LName} />
        <InfoInput label="Email address" className={infoForm__Email} />
        <InfoInput label="Phone number" className={infoForm__Phone} />
      </form>
      <InfoRadio
        legend="Who are you booking for?"
        name="travel"
        values={["I am the main guest", "Booking is for someone else"]}
      />
    </div>
  );
};

export default GuestInfoForm;
