import styles from "./RoomDetail.module.scss";
import RoomHead from "./RoomHead/RoomHead";
import ImagesPreview from "./ImagesPreview/ImagesPreview";
import RoomMain from "./RoomMain/RoomMain";
import StaticFooter from "../../components/Footer/StaticFooter";
import TopNav from "../../components/TopNav/TopNav";
import StickySectionNav from "./StickySectionNav/StickySectionNav";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

const RoomDetail = function () {
  const stickyNavIntersectionObserverRef = useRef(null);
  const stickyNavRef = useRef(null);
  const [navIsSticky, setNavIsSticky] = useState(false);
  const [stickyNavHeight, setStickyNavHeight] = useState(0);
  const imagePreviewRef = useRef(null);
  const [activeId, setActiveId] = useState("");

  //Sticky Nav navigation

  const aboutSectionRef = useRef(null);
  const facilitiesSectionRef = useRef(null);
  const locationSectionRef = useRef(null);
  const rulesSectionRef = useRef(null);
  const hostSectionref = useRef(null);
  //

  const handleScrollToElement = function (elementRef) {
    window.scrollTo({
      top:
        window.scrollY +
        elementRef.current.getBoundingClientRect().top -
        stickyNavHeight -
        30,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: `-${stickyNavHeight}px`,
    };
    const observerCallback = function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.target === imagePreviewRef.current) {
          setNavIsSticky(true);
        } else {
          setNavIsSticky(false);
        }
      });
    };
    stickyNavIntersectionObserverRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    stickyNavIntersectionObserverRef.current.observe(imagePreviewRef.current);
    return () => {
      stickyNavIntersectionObserverRef.current.disconnect();
    };
  }, [stickyNavHeight]);

  useEffect(() => {
    const handleScrollToSection = function () {
      if (
        imagePreviewRef.current.getBoundingClientRect().top -
          stickyNavHeight * 2 <
        0
      ) {
        setActiveId("images");
      }
      if (
        aboutSectionRef.current.getBoundingClientRect().top -
          stickyNavHeight * 2 <
        0
      ) {
        setActiveId("about");
      }
      if (
        facilitiesSectionRef.current.getBoundingClientRect().top -
          stickyNavHeight * 2 <
        0
      ) {
        setActiveId("facilities");
      }
      if (
        locationSectionRef.current.getBoundingClientRect().top -
          stickyNavHeight * 2 <
        0
      ) {
        setActiveId("location");
      }
      if (
        hostSectionref.current.getBoundingClientRect().top -
          stickyNavHeight * 2 <
        0
      ) {
        setActiveId("host");
      }
      if (
        rulesSectionRef.current.getBoundingClientRect().top -
          stickyNavHeight * 2 <
        0
      ) {
        setActiveId("rules");
      }
    };
    document.addEventListener("scroll", handleScrollToSection);

    return () => {
      document.removeEventListener("scroll", handleScrollToSection);
    };
  }, [stickyNavHeight]);

  useLayoutEffect(() => {
    setStickyNavHeight(stickyNavRef.current.getBoundingClientRect().height);
  }, []);

  const { roomDetail } = styles;
  return (
    <>
      <TopNav />
      <StickySectionNav
        activeId={activeId}
        isVisible={navIsSticky}
        ref={stickyNavRef}
        onScrollToAbout={handleScrollToElement.bind(null, aboutSectionRef)}
        onScrollToFacilities={handleScrollToElement.bind(
          null,
          facilitiesSectionRef
        )}
        onScrollToLocation={handleScrollToElement.bind(
          null,
          locationSectionRef
        )}
        onScrollToPhotos={handleScrollToElement.bind(null, imagePreviewRef)}
        onScrollToRules={handleScrollToElement.bind(null, rulesSectionRef)}
        onScrollToHost={handleScrollToElement.bind(null, hostSectionref)}
      />
      <div className={roomDetail}>
        <RoomHead />
        <ImagesPreview ref={imagePreviewRef} />
        <RoomMain
          stickyNavHeight={stickyNavHeight}
          locationRef={locationSectionRef}
          aboutRef={aboutSectionRef}
          rulesRef={rulesSectionRef}
          facilitiesRef={facilitiesSectionRef}
          hostRef={hostSectionref}
        />
      </div>
      <StaticFooter />
    </>
  );
};

export default RoomDetail;
