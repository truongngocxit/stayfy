import styles from "./EditButton.module.scss";
import EditIcon from "../../../../components/UI/SVG/EditIcon";

const EditButton = function ({ onClick, className }) {
  const { editBtn } = styles;
  return (
    <button className={`${editBtn} ${className}`} onClick={onClick}>
      <EditIcon />
    </button>
  );
};

export default EditButton;
