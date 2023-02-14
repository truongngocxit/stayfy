import styles from "./ReadMeModal.module.scss";
import { createPortal } from "react-dom";
import { useState } from "react";
import Overlay from "../UI/Overlay/Overlay";
import HandIcon from "../UI/SVG/HandIcon";
import CloseIcon from "../UI/SVG/CloseIcon";
import ModalTransition from "../ModalTransition/ModalTransition";

const ReadMeModal = function ({ isVisible, onClose }) {
  const {
    readme,
    readme__CV,
    readme__Link,
    readme__CloseIcon,
    readme__WavingIcon,
    readme__Heading,
    readme__Content,
  } = styles;
  return (
    <>
      <ModalTransition className={readme} isVisible={isVisible}>
        <button className={readme__CloseIcon} onClick={onClose}>
          <CloseIcon />
        </button>
        <span className={readme__WavingIcon}>👋</span>
        <h2 className={readme__Heading}>
          If you're a recruiter, please read me.
        </h2>
        <div className={readme__Content}>
          <p>
            Hi there! I'm Truong, the one who's behind this website. Here are
            just some background infos about it.
          </p>
          <ul>
            <li>
              <strong>Front-end:</strong> I relies on ReactJS and pure CSS/SCSS.
              For some complex elements that can take too long to customize -
              such as the date picker, I resorted to{" "}
              <a
                href="https://ant.design/"
                target="_black"
                rel="noreferrer noopener"
                className={readme__Link}
              >
                Ant Design
              </a>
              's library. Regarding deployment, I'm using Vercel.
            </li>
            <li>
              <strong>Back-end:</strong> I built a simple{" "}
              <a
                href="https://stayfy-backend-production.up.railway.app/"
                target="_black"
                rel="noreferrer noopener"
                className={readme__Link}
              >
                NodeJS API services
              </a>
              . To deploy it, I'm using Railway/Render.
            </li>
            <li>
              <strong>Database:</strong> I'm using{" "}
              <a
                href="https://firebase.google.com/docs/firestore"
                target="_black"
                rel="noreferrer noopener"
                className={readme__Link}
              >
                Google's Firestore
              </a>
              .
            </li>
            <li>
              <strong>Design:</strong> I basically replicated{" "}
              <a
                href="https://www.airbnb.com/"
                target="_black"
                rel="noreferrer noopener"
                className={readme__Link}
              >
                AirBnB's
              </a>
              , but I re-built it the way I feel right, with very little code
              inspect. The logo, color pallete, & other elements I designed
              myself using Figma.
            </li>
            <li>
              <strong>Data:</strong> I took all these hotels' & homestays'
              images from{" "}
              <a
                href="https://www.booking.com/"
                target="_black"
                rel="noreferrer noopener"
                className={readme__Link}
              >
                Booking.com
              </a>{" "}
              & AirBnB. This project is non-commercial, and for job application
              purposes only.
            </li>
          </ul>
          <p>
            <em>
              I am also in an urgent need of a React fresher/intern job. I am
              work-oriented and can self-learn new things quickly. As an
              ex-marketer, I can also design and write (in both Vietnamese &
              English) decently. If you have any opportunity, please contact me:{" "}
              <a
                href="https://firebasestorage.googleapis.com/v0/b/stayfy-d4fc1.appspot.com/o/cv%2FCV-large.pdf?alt=media&token=492b0198-d2e1-49c7-9659-f99b6bcef4df"
                target="_black"
                rel="noreferrer noopener"
                className={`${readme__CV}`}
              >
                my CV.
              </a>
            </em>
          </p>
        </div>
      </ModalTransition>
      {isVisible &&
        createPortal(
          <Overlay zIndex={1200} onClick={onClose} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default ReadMeModal;
