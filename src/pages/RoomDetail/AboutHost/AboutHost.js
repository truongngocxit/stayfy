import styles from "./AboutHost.module.scss";
import StarIcon from "../../../components/UI/SVG/StarIcon";
import PhoneIcon from "../../../components/UI/SVG/PhoneIcon";
import MailIcon from "../../../components/UI/SVG/MailIcon";
import { forwardRef } from "react";

const AboutHost = forwardRef(function ({ hostInfo, className }, ref) {
  const {
    aboutHost,
    aboutHost__Info,
    aboutHost__Info__Image,
    aboutHost__Info__Name,
    aboutHost__Info__Name__Reviews,
    aboutHost__Contacts,
    aboutHost__Contacts__Item,
  } = styles;

  return (
    <div className={`${aboutHost} ${className}`} ref={ref} id="host">
      <div className={aboutHost__Info}>
        <div className={aboutHost__Info__Image}>
          <img
            src={
              hostInfo.img ||
              "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
            }
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
      <div className={aboutHost__Contacts}>
        <div className={aboutHost__Contacts__Item}>
          <PhoneIcon />
          <span>23123123312</span>
        </div>
        <div className={aboutHost__Contacts__Item}>
          <MailIcon />
          <span>thanhngan@gmail.com</span>
        </div>
      </div>
    </div>
  );
});

export default AboutHost;
