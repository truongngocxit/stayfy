import styles from "./StickySectionNav.module.scss";
import { forwardRef } from "react";

const StickySectionNav = forwardRef(function (
  {
    isVisible = false,
    onScrollToAbout,
    onScrollToPhotos,
    onScrollToFacilities,
    onScrollToLocation,
    onScrollToHost,
    onScrollToRules,
    onScrollToRoomTypes,
    activeId,
  },
  ref
) {
  return (
    <nav
      className={`${stickyNav} ${!isVisible ? stickyNavHidden : ""}`}
      ref={ref}
    >
      <ul className={stickyNav__Links}>
        <li
          onClick={onScrollToPhotos}
          className={`${stickyNav__Link} ${
            activeId === "images" ? stickyNav__LinkActive : ""
          }`}
        >
          <button>Photos</button>
        </li>
        <li
          onClick={onScrollToAbout}
          className={`${stickyNav__Link} ${
            activeId === "about" ? stickyNav__LinkActive : ""
          }`}
        >
          <button>About</button>
        </li>
        <li
          onClick={onScrollToFacilities}
          className={`${stickyNav__Link} ${
            activeId === "facilities" ? stickyNav__LinkActive : ""
          }`}
        >
          <button>Facilities</button>
        </li>
        <li
          onClick={onScrollToRoomTypes}
          className={`${stickyNav__Link} ${
            activeId === "roomTypes" ? stickyNav__LinkActive : ""
          }`}
        >
          <button>Room types</button>
        </li>
        <li
          onClick={onScrollToLocation}
          className={`${stickyNav__Link} ${
            activeId === "location" ? stickyNav__LinkActive : ""
          }`}
        >
          <button>Location</button>
        </li>
        <li
          onClick={onScrollToHost}
          className={`${stickyNav__Link} ${
            activeId === "host" ? stickyNav__LinkActive : ""
          }`}
        >
          <button>Host</button>
        </li>
        <li
          onClick={onScrollToRules}
          className={`${stickyNav__Link} ${
            activeId === "rules" ? stickyNav__LinkActive : ""
          }`}
        >
          <button>Rules</button>
        </li>
      </ul>
    </nav>
  );
});

export default StickySectionNav;

const {
  stickyNav,
  stickyNav__Links,
  stickyNav__Link,
  ["stickyNav__Link--Active"]: stickyNav__LinkActive,
  ["stickyNav--Hidden"]: stickyNavHidden,
  link__Active,
} = styles;
