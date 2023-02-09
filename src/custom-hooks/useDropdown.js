import { useEffect, useRef, useState, useCallback } from "react";

const useDropdown = function (onAfterCloseDropdown = null) {
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  const handleOpenDropdown = function () {
    setDropdownIsVisible(true);
  };

  const handleCloseDropdown = useCallback(
    function () {
      setDropdownIsVisible(false);
      if (onAfterCloseDropdown) {
        onAfterCloseDropdown();
      }
    },
    [onAfterCloseDropdown]
  );

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
  }, [handleCloseDropdown]);

  return {
    dropdownIsVisible,
    dropdownRef,
    containerRef,
    handleOpenDropdown,
    handleCloseDropdown,
  };
};

export default useDropdown;
