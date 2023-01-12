import styles from "./ProfileSettingItem.module.scss";
import EditIcon from "../../../components/UI/SVG/EditIcon";

const ProfileSettingItem = function () {
  const { settingItem, settingItem__Info, settingItem__Icon } = styles;
  return (
    <div className={settingItem}>
      <div className={settingItem__Info}>
        <h4>Legal name</h4>
        <p>Truong Nguyen</p>
      </div>
      <EditIcon className={settingItem__Icon} />
    </div>
  );
};

export default ProfileSettingItem;
