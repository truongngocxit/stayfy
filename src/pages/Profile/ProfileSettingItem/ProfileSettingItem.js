import styles from "./ProfileSettingItem.module.scss";
import EditIcon from "../../../components/UI/SVG/EditIcon";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";
import { Tooltip } from "antd";

const ProfileSettingItem = function ({
  children,
  heading,
  savedInfo,
  placeholder,
  className,
  isEditing,
  onOpenSetting,
  onCloseSetting,
  formHasUpdated,
}) {
  const {
    settingItem,
    settingItem__Info,
    settingItem__Info__HasUpdated,
    settingItem__Icon,
    settingItem__Form,
  } = styles;
  return (
    <div className={`${settingItem} ${className}`}>
      <div className={settingItem__Info}>
        <h4>{heading}</h4>
        {!isEditing ? (
          <Tooltip open={formHasUpdated} color="#00b4d8" title="Successfully!">
            <p className={formHasUpdated ? settingItem__Info__HasUpdated : ""}>
              {savedInfo}
            </p>
          </Tooltip>
        ) : (
          <p>{placeholder}</p>
        )}
      </div>
      <button
        className={settingItem__Icon}
        onClick={isEditing ? onCloseSetting : onOpenSetting}
      >
        {!isEditing ? <EditIcon /> : <CloseIcon />}
      </button>
      {isEditing && <div className={settingItem__Form}>{children}</div>}
    </div>
  );
};

export default ProfileSettingItem;
