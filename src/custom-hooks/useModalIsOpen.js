import { useEffect, useState } from "react";

const useModalIsOpen = function () {
  const [modalIsClosed, setModalIsClosed] = useState(false);
  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.body.scrollWidth;
    console.log(true);
    if (!(document.body.style.overflow === "hidden")) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollBarWidth}px`;
    }

    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "visible";
        document.body.style.marginRight = 0;
      }
    };
  }, []);

  return [modalIsClosed, setModalIsClosed];
};

export default useModalIsOpen;
