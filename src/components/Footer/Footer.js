import styles from "./Footer.module.scss";

import FacebookIcon from "../UI/SVG/FacebookIcon";
import TwitterIcon from "../UI/SVG/TwitterIcon";
import InstagramIcon from "../UI/SVG/InstagramIcon";
import LinkedinIcon from "../UI/SVG/LinkedinIcon";

const Footer = function ({ onCloseFooter }) {
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
            <h3>Info</h3>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </section>
          <section className={footer__Links__Company}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Letters from our founder</a>
              </li>
            </ul>
          </section>
          <section className={footer__Links__Social}>
            <h3>Social</h3>
            <ul>
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </section>
        </div>
        <form className={footer__Subscription}>
          <label>Get special offers and more from Stayfy</label>

          <input type="email" />
          <button>Subscribe</button>
        </form>
      </footer>
    </>
  );
};

export default Footer;
