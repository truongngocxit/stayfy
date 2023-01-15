import { useEffect } from "react";

const useModalIsOpen = function () {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "visible");
  }, []);
};

export default useModalIsOpen;
