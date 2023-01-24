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
  const { stickyNav, link__Active } = styles;
  return (
    <nav
      className={stickyNav}
      style={
        !isVisible
          ? {
              visibility: "hidden",
              opacity: "0",
            }
          : {
              visibility: "visible",
              opacity: "1",
            }
      }
      ref={ref}
    >
      <ul>
        <li
          onClick={onScrollToPhotos}
          className={activeId === "images" ? link__Active : ""}
        >
          <button>Photos</button>
        </li>
        <li
          onClick={onScrollToAbout}
          className={activeId === "about" ? link__Active : ""}
        >
          <button>About</button>
        </li>
        <li
          onClick={onScrollToFacilities}
          className={activeId === "facilities" ? link__Active : ""}
        >
          <button>Facilities</button>
        </li>
        <li
          onClick={onScrollToRoomTypes}
          className={activeId === "roomTypes" ? link__Active : ""}
        >
          <button>Room types</button>
        </li>
        <li
          onClick={onScrollToLocation}
          className={activeId === "location" ? link__Active : ""}
        >
          <button>Location</button>
        </li>
        <li
          onClick={onScrollToHost}
          className={activeId === "host" ? link__Active : ""}
        >
          <button>Host</button>
        </li>
        <li
          onClick={onScrollToRules}
          className={activeId === "rules" ? link__Active : ""}
        >
          <button>Rules</button>
        </li>
      </ul>
    </nav>
  );
});

export default StickySectionNav;
