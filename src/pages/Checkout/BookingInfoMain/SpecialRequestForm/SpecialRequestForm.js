import styles from "./SpecialRequestForm.module.scss";

const SpecialRequestForm = function () {
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
      <form className={requestForm__Form}>
        <label>Please write your requests in English or Vietnamese.</label>
        <textarea rows="6" />
      </form>
    </div>
  );
};

export default SpecialRequestForm;
