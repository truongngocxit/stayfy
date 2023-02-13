import styles from "./BareFooter.module.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "../../UI/SVG/FacebookIcon";
import TwitterIcon from "../../UI/SVG/TwitterIcon";
import InstagramIcon from "../../UI/SVG/InstagramIcon";
import LinkedinIcon from "../../UI/SVG/LinkedinIcon";
import AfterSubmitModal from "../../AfterSubmitModal/AfterSubmitModal";
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm";

const BareFooter = function ({ onCloseFooter }) {
  const {
    footer,
    footer__Links,
    footer__Links__Info,
    footer__Links__Company,
    footer__Links__Social,
    footer__Subscription,
  } = styles;
  return (
    <>
      <footer className={footer}>
        <div className={footer__Links}>
          <section className={footer__Links__Info}>
            <h3>Account</h3>
            <ul>
              <li>
                <Link to="/terms">Terms & Services</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </section>
          <section className={footer__Links__Company}>
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </section>
          <section className={footer__Links__Social}>
            <h3>Social</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/ng.phu.truong"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/truong.nguyen.7797"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/truongnguyen1997/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </section>
        </div>

        <SubscriptionForm className={footer__Subscription} />
      </footer>
    </>
  );
};

export default BareFooter;
