import styles from "./FactItem.module.scss";
import { forwardRef } from "react";

const FactItem = forwardRef(function ({ title, description, date }, ref) {
  const { fact, fact__Title, fact__Description, fact__Date } = styles;
  return (
    <figure className={fact} ref={ref}>
      <h3 className={fact__Title}>{title}</h3>
      <p className={fact__Description}>{description}</p>
      <span className={fact__Date}>{date}</span>
    </figure>
  );
});

export default FactItem;
