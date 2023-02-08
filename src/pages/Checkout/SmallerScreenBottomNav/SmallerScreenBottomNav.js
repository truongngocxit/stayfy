import styles from "./SmallerScreenBottomNav.module.scss";
import BookingButton from "../BookingButton/BookingButton.js";
import EditIcon from "../../../components/UI/SVG/EditIcon";
import BookingDetailModal from "./BookingDetailModal/BookingDetailModal";
import { createPortal } from "react-dom";
import { useState } from "react";

const SmallerScreenBottomNav = function ({
  roomInfo,
  onSubmitting,
  onHasSubmitted,
}) {
  const [detailModalIsVisible, setDetailModalIsVisible] = useState(false);

  const handleOpenDetailModal = function () {
    setDetailModalIsVisible(true);
  };

  const handleCloseDetailModal = function () {
    setDetailModalIsVisible(false);
  };

  const totalPrice =
    (roomInfo.rooms.reduce(
      (total, curRoom) => total + Number(curRoom.price) * curRoom.quantity,
      0
    ) *
      (new Date(roomInfo.date.end) - new Date(roomInfo.date.start))) /
    1000 /
    60 /
    60 /
    24;

  const {
    bottomNav,
    bottomNav__Btn,
    bottomNav__PriceSummary,
    bottomNav__PriceSummary__EditBtn,
    bottomNav__PriceSummary__Text,
  } = styles;
  return (
    <>
      <nav className={bottomNav}>
        <div className={bottomNav__PriceSummary}>
          <span className={bottomNav__PriceSummary__Text}>
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button
            className={bottomNav__PriceSummary__EditBtn}
            onClick={handleOpenDetailModal}
          >
            <EditIcon />
          </button>
        </div>
        <BookingButton
          text="Book now"
          className={bottomNav__Btn}
          onSubmitting={onSubmitting}
          onHasSubmitted={onHasSubmitted}
        />
      </nav>
      {detailModalIsVisible &&
        createPortal(
          <BookingDetailModal
            onCloseModal={handleCloseDetailModal}
            roomInfo={roomInfo}
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default SmallerScreenBottomNav;
