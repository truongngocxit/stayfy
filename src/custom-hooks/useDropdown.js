import { useEffect, useRef, useState } from "react";

const useDropdown = function () {
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpenDropdown = function (event) {
    setDropdownIsVisible(true);
  };

  const handleCloseDropdown = function (event) {
    if (dropdownRef.current && !dropdownRef?.current.contains(event.target)) {
      setDropdownIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdown);

    return () => document.removeEventListener("click", handleCloseDropdown);
  }, []);

  return {
    dropdownIsVisible,
    dropdownRef,
    handleCloseDropdown,
    handleOpenDropdown,
  };
};

export default useDropdown;
