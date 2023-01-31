import styles from "./GuestNum.module.scss";
import EditButton from "../EditButton/EditButton";
import { useState } from "react";
import { createPortal } from "react-dom";
import GuestNumAdjustModal from "./GuestNumAdjustModal/GuestNumAdjustModal";
import Overlay from "../../../../components/UI/Overlay/Overlay";

const GuestNum = function ({ guests, allowModify }) {
  let babiesNumText, animalsNumText;
  const { adults, children, babies, animals } = guests;
  const [guestNumModalIsVisible, setGuestNumModalIsVisible] = useState(false);

  const handleOpenGuestNumModal = function () {
    setGuestNumModalIsVisible(true);
  };

  const handleCloseGuestNumModal = function () {
    setGuestNumModalIsVisible(false);
  };

  if (babies === 1) {
    babiesNumText = "1 baby";
  } else if (babies > 1) {
    babiesNumText = `${babies} babies`;
  }

  if (animals === 1) {
    animalsNumText = "1 animal";
  } else if (animals > 1) {
    animalsNumText = `${animals} animals`;
  }

  const { guestNum, guestNum__Label, guestNum__Num, guestNum__EditIcon } =
    styles;
  return (
    <>
      <div className={guestNum}>
        {allowModify && (
          <EditButton
            className={guestNum__EditIcon}
            onClick={handleOpenGuestNumModal}
          />
        )}
        <span className={guestNum__Label}>Guests</span>
        <span className={guestNum__Num}>
          {adults + children} guests{babies !== 0 ? `, ${babiesNumText}` : ""}
          {animals !== 0 ? `, ${animalsNumText}` : ""}
        </span>
      </div>
      {guestNumModalIsVisible &&
        createPortal(
          <Overlay zIndex={1200} onClick={handleCloseGuestNumModal} />,
          document.getElementById("overlay-root")
        )}
      {guestNumModalIsVisible &&
        createPortal(
          <GuestNumAdjustModal
            onCloseGuestNumModal={handleCloseGuestNumModal}
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default GuestNum;
