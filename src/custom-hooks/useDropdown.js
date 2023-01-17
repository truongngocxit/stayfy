import { useEffect, useRef, useState } from "react";

const useDropdown = function () {
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpenDropdown = function () {
    setDropdownIsVisible(true);
  };

  const handleCloseDropdown = function () {
    setDropdownIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = function (event) {
      if (dropdownRef.current && !dropdownRef?.current.contains(event.target)) {
        setDropdownIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return {
    dropdownIsVisible,
    dropdownRef,
    handleOpenDropdown,
    handleCloseDropdown,
  };
};

export default useDropdown;
