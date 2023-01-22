import styles from "./AboutHost.module.scss";
import StarIcon from "../../../components/UI/SVG/StartIcon";
import { forwardRef } from "react";

const AboutHost = forwardRef(function ({ hostInfo }, ref) {
  const {
    aboutHost,
    aboutHost__Info,
    aboutHost__Info__Image,
    aboutHost__Info__Name,
    aboutHost__Info__Name__Reviews,
    aboutHost__Description,
  } = styles;
  console.log(hostInfo.joinedDate);
  return (
    <div className={aboutHost} ref={ref} id="host">
      <div className={aboutHost__Info}>
        <div className={aboutHost__Info__Image}>
          <img
            src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
            alt="placeholder host"
          />
        </div>
        <div className={aboutHost__Info__Name}>
          <h3>Hosted by {hostInfo.name}</h3>
          <span>
            Joined in{" "}
            {new Date(hostInfo.joinedDate).toLocaleDateString("en-us", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <div className={aboutHost__Info__Name__Reviews}>
            <StarIcon />
            <span>70 reviews</span>
          </div>
        </div>
      </div>
      <div className={aboutHost__Description}>
        <p>
          Caly Villa includes balcony looking over the valley and our beautiful
          garden. The room is equipped like a standard hotel. Wooden king bed
          and natural mattress for your best sleep. If you're looking for a
          Vietnamese homestay experience but still enjoy the comfort of staying
          in a hotel then this is for you. We would like to make sure you will
          have a comfortable stay at our place, so if you need anything please
          just ask!
        </p>
      </div>
    </div>
  );
});

export default AboutHost;
