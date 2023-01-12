import styles from "./RoomMoreInfo.module.scss";
import { forwardRef } from "react";

const RoomMoreInfo = forwardRef(function (_, ref) {
  const { moreInfo, moreInfo__Container, moreInfo__Item } = styles;
  return (
    <div className={moreInfo} ref={ref} id="rules">
      <h3>House rules & more</h3>
      <div className={moreInfo__Container}>
        <div className={moreInfo__Item}>
          <h4>House rules</h4>
          <ul>
            <li>Check-in after 2:00 PM</li>
            <li>Checkout before 10:00 AM</li>
            <li>2 guests maximum</li>
          </ul>
          <button>Show more</button>
        </div>
        <div className={moreInfo__Item}>
          <h4>Safety & property</h4>
          <ul>
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Security camera/recording device</li>
          </ul>
          <button>Show more</button>
        </div>
        <div className={moreInfo__Item}>
          <h4>Cancellation policy</h4>
          <ul>
            <li>
              Partial refund: Get back every night that remains 24 hours after
              you cancel. No refund of nights you spent or the service fee.
            </li>
          </ul>
          <button>Show more</button>
        </div>
      </div>
    </div>
  );
});

export default RoomMoreInfo;
