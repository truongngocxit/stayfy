import styles from "./ProfileSettingItem.module.scss";
import EditIcon from "../../../components/UI/SVG/EditIcon";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";
import { useState } from "react";

const ProfileSettingItem = function ({
  children,
  heading,
  savedInfo,
  placeholder,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = function () {
    setIsEditing((e) => !e);
  };

  const {
    settingItem,
    settingItem__Info,
    settingItem__Icon,
    settingItem__Form,
  } = styles;
  return (
    <div className={settingItem}>
      <div className={settingItem__Info}>
        <h4>{heading}</h4>
        <p>{!isEditing ? savedInfo : placeholder}</p>
      </div>
      <div className={settingItem__Icon} onClick={handleToggleEdit}>
        {!isEditing ? <EditIcon /> : <CloseIcon />}
      </div>
      {isEditing && <div className={settingItem__Form}>{children}</div>}
    </div>
  );
};

export default ProfileSettingItem;
