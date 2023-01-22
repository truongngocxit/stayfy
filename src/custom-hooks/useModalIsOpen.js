import { useEffect } from "react";

const useModalIsOpen = function (modalIsOpen) {
  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.body.scrollWidth;

    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollBarWidth}px`;
    }
    if (!modalIsOpen) {
      document.body.style.overflow = "visible";
      document.body.style.marginRight = 0;
    }
  }, [modalIsOpen]);
};

export default useModalIsOpen;

// const [modalIsClosed, setModalIsClosed] = useState(false);
// useEffect(() => {
//   const scrollBarWidth = window.innerWidth - document.body.scrollWidth;
//   if (!(document.body.style.overflow === "hidden")) {
//     document.body.style.overflow = "hidden";
//     document.body.style.marginRight = `${scrollBarWidth}px`;
//   }

//   return () => {
//     if (document.body.style.overflow === "hidden") {
//       document.body.style.overflow = "visible";
//       document.body.style.marginRight = 0;
//     }
//   };
// }, []);

// return [modalIsClosed, setModalIsClosed];
