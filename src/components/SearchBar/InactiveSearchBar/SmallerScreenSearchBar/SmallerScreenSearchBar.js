import styles from "./SmallerScreenSearchBar.module.scss";
import SearchIcon from "../../../UI/SVG/SearchIcon";
import FilterButton from "../../../FilterMenu/FilterButton/FilterButton";
import FilterModal from "../../../FilterModal/FilterModal";
import { createPortal } from "react-dom";
import { useState } from "react";

const SmallerScreenSearchBar = function ({
  query,
  dateString,
  guests,
  className,
  onClick,
}) {
  const [filterModalIsVisible, setFilterModalIsVisible] = useState(false);

  const handleOpenFilterModal = function (event) {
    event.stopPropagation();
    setFilterModalIsVisible(true);
  };

  const handleCloseFilterModal = function (event) {
    event.stopPropagation();
    setFilterModalIsVisible(false);
  };

  return (
    <div className={`${searchBar} ${className}`} onClick={onClick}>
      <div className={searchBar__Icon}>
        <SearchIcon />
      </div>

      <div className={searchBar__Main}>
        <div className={searchBar__Main__Place}>
          <span>{query || "All places"}</span>
        </div>
        <div className={searchBar__Main__DateGuests}>
          <span>{dateString}</span>
          <span>·</span>
          <span>
            {guests.adults
              ? `${guests.adults + guests.children} guests`
              : "For 1 guest"}
          </span>
        </div>
      </div>

      <div className={searchBar__FilterBtn}>
        <FilterButton hasText={false} onClick={handleOpenFilterModal} />

        {createPortal(
          <FilterModal
            isFullScreen={true}
            onClick={handleCloseFilterModal}
            isVisible={filterModalIsVisible}
          />,
          document.getElementById("modal-root")
        )}
      </div>
    </div>
  );
};

export default SmallerScreenSearchBar;

const {
  searchBar,
  searchBar__FilterBtn,
  searchBar__Icon,
  searchBar__Main,
  searchBar__Main__Place,
  searchBar__Main__DateGuests,
} = styles;
