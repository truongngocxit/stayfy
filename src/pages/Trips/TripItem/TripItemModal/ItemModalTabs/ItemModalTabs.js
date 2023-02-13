import styles from "./ItemModalTabs.module.scss";
import MoreIcon from "../../../../../components/UI/SVG/MoreIcon";
import useDropdown from "../../../../../custom-hooks/useDropdown";

const ItemModalTabs = function ({
  className,
  activeTab,
  onChangeTab,
  isSmallerScreen,
}) {
  const {
    dropdownIsVisible,
    dropdownRef,
    containerRef,
    handleOpenDropdown,
    handleCloseDropdown,
  } = useDropdown();

  return (
    <nav
      className={`${modalTabs} ${
        isSmallerScreen ? modalTabsSmaller : modalTabsLarger
      } ${className}`}
      ref={containerRef}
    >
      {isSmallerScreen && (
        <button className={modalTabs__MoreBtn} onClick={handleOpenDropdown}>
          <MoreIcon />
        </button>
      )}
      {(!isSmallerScreen || (isSmallerScreen && dropdownIsVisible)) && (
        <ul>
          {isSmallerScreen && (
            <li
              className={`${modalTabs__Tab} ${
                activeTab === "details" ? modalTabs__TabActive : ""
              }`}
              onClick={onChangeTab.bind(null, "details")}
            >
              Details
            </li>
          )}

          <li
            className={`${modalTabs__Tab} ${
              activeTab === "images" ? modalTabs__TabActive : ""
            }`}
            onClick={onChangeTab.bind(null, "images")}
          >
            Images
          </li>
          <li
            className={`${modalTabs__Tab} ${
              activeTab === "facilities" ? modalTabs__TabActive : ""
            }`}
            onClick={onChangeTab.bind(null, "facilities")}
          >
            Facilities
          </li>
          <li
            className={`${modalTabs__Tab} ${
              activeTab === "location" ? modalTabs__TabActive : ""
            }`}
            onClick={onChangeTab.bind(null, "location")}
          >
            Location
          </li>
          <li
            className={`${modalTabs__Tab} ${
              activeTab === "contact" ? modalTabs__TabActive : ""
            }`}
            onClick={onChangeTab.bind(null, "contact")}
          >
            Contact
          </li>
          <li
            className={`${modalTabs__Tab} ${modalTabs__TabCancel} ${
              activeTab === "cancel" ? modalTabs__TabActive : ""
            }`}
            onClick={onChangeTab.bind(null, "cancel")}
          >
            Cancel
          </li>
        </ul>
      )}
    </nav>
  );
};

export default ItemModalTabs;

const {
  modalTabs,
  ["modalTabs--Smaller"]: modalTabsSmaller,
  ["modalTabs--Larger"]: modalTabsLarger,
  modalTabs__MoreBtn,
  modalTabs__Tab,
  ["modalTabs__Tab--Cancel"]: modalTabs__TabCancel,
  ["modalTabs__Tab--Active"]: modalTabs__TabActive,
} = styles;
