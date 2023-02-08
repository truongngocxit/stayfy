import styles from "./ItemModalTabs.module.scss";

const ItemModalTabs = function ({ className, activeTab, onChangeTab }) {
  const {
    modalTabs,
    modalTabs__Tab,
    modalTabs__Tab__Cancel,
    modalTabs__Tab__Active,
  } = styles;

  return (
    <nav className={`${modalTabs} ${className}`}>
      <ul>
        <li
          className={`${modalTabs__Tab} ${
            activeTab === "images" ? modalTabs__Tab__Active : ""
          }`}
          onClick={onChangeTab.bind(null, "images")}
        >
          Images
        </li>
        <li
          className={`${modalTabs__Tab} ${
            activeTab === "facilities" ? modalTabs__Tab__Active : ""
          }`}
          onClick={onChangeTab.bind(null, "facilities")}
        >
          Facilities
        </li>
        <li
          className={`${modalTabs__Tab} ${
            activeTab === "location" ? modalTabs__Tab__Active : ""
          }`}
          onClick={onChangeTab.bind(null, "location")}
        >
          Location
        </li>
        <li
          className={`${modalTabs__Tab} ${
            activeTab === "contact" ? modalTabs__Tab__Active : ""
          }`}
          onClick={onChangeTab.bind(null, "contact")}
        >
          Contact
        </li>
        <li
          className={`${modalTabs__Tab} ${modalTabs__Tab__Cancel} ${
            activeTab === "cancel" ? modalTabs__Tab__Active : ""
          }`}
          onClick={onChangeTab.bind(null, "cancel")}
        >
          Cancel
        </li>
      </ul>
    </nav>
  );
};

export default ItemModalTabs;
