import { useEffect, useRef, useState } from "react";

const useDropdown = function (onAfterCloseDropdown = null) {
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  const handleOpenDropdown = function () {
    setDropdownIsVisible(true);
  };

  const handleCloseDropdown = function () {
    setDropdownIsVisible(false);
    if (onAfterCloseDropdown) {
      onAfterCloseDropdown();
    }
  };

  useEffect(() => {
    const handleClickOutside = function (event) {
      if (
        containerRef.current &&
        !containerRef?.current.contains(event.target)
      ) {
        handleCloseDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return {
    dropdownIsVisible,
    dropdownRef,
    containerRef,
    handleOpenDropdown,
    handleCloseDropdown,
  };
};

export default useDropdown;
