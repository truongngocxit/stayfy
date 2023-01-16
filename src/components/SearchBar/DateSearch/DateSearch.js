import styles from "./DateSearch.module.scss";
import DateRangePicker from "../../DateRangePicker/DateRangePicker";

const DateSearch = function ({ className, onFocus, onBlur, onChange }) {
  const { dateSearch } = styles;
  return (
    <div className={`${dateSearch} ${className}`}>
      <DateRangePicker onFocus={onFocus} onBlur={onBlur} onChange={onChange} />
    </div>
  );
};

export default DateSearch;
