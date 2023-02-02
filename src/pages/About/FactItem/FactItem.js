import styles from "./FactItem.module.scss";

const FactItem = function ({ title, description, date }) {
  const { fact, fact__Title, fact__Description, fact__Date } = styles;
  return (
    <figure className={fact}>
      <h3 className={fact__Title}>{title}</h3>
      <p className={fact__Description}>{description}</p>
      <span className={fact__Date}>{date}</span>
    </figure>
  );
};

export default FactItem;
