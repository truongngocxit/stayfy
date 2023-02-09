import styles from "./ItemModalTabs.module.scss";
import { useState } from "react";
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

  const {
    modalTabs,
    modalTabs__Smaller,
    modalTabs__Larger,
    modalTabs__MoreBtn,
    modalTabs__Tab,
    modalTabs__Tab__Cancel,
    modalTabs__Tab__Active,
  } = styles;

  return (
    <nav
      className={`${modalTabs} ${
        isSmallerScreen ? modalTabs__Smaller : modalTabs__Larger
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
                activeTab === "details" ? modalTabs__Tab__Active : ""
              }`}
              onClick={onChangeTab.bind(null, "details")}
            >
              Details
            </li>
          )}

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
      )}
    </nav>
  );
};

export default ItemModalTabs;
