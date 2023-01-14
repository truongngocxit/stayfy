import styles from "./ArrivalTimeForm.module.scss";
import TimeIcon from "../../../../components/UI/SVG/TimeIcon";

const ArrivalTimeForm = function () {
  const { timeForm, timeForm__Heading, timeForm__Info, timeForm__Form } =
    styles;
  return (
    <div className={timeForm}>
      <h3 className={timeForm__Heading}>Your arrival time</h3>
      <p className={timeForm__Info}>
        <TimeIcon />
        <span>You can check in between 13:00 and 23:00</span>
      </p>
      <label htmlFor="time" className={timeForm__Form}>
        <span>Add your estimated arrival time:</span>
        <select name="time" id="time">
          {times.map((t) => (
            <option value={t} key={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ArrivalTimeForm;

const times = [
  "I'm not sure",
  "00:00 - 01:00",
  "01:00 - 02:00",
  "02:00 - 03:00",
  "03:00 - 04:00",
  "04:00 - 05:00",
  "05:00 - 06:00",
  "06:00 - 07:00",
  "07:00 - 08:00",
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
  "18:00 - 19:00",
  "19:00 - 20:00",
  "20:00 - 21:00",
  "21:00 - 22:00",
  "22:00 - 23:00",
  "23:00 - 24:00",
  "00:00 - 01:00 (next day)",
  "01:00 - 02:00 (next day)",
];
