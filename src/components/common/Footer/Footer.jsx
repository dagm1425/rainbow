import "./styles.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Index() {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-info">
          <h2>
            your trusted
            <br />
            office supplies partner
          </h2>
          <div>
            <p>general enquiries</p>
            <div>
              <a href="mailto:info@asaitaproperties.com">
                info@rainbowstacomp.com
              </a>
              <br />
              <a href="tel:+251118712663">+251 1 557 34 58</a>
            </div>
          </div>
        </div>
        <div className="footer-branding">
          <a href="/" className="logo">
            <img src="../../../images/logo.png" alt="rainbow logo" />
          </a>
          <div className="socials-wrapper">
            <a
              href="https://www.facebook.com/profile.php?id=61559384081074"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/asaita00/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/Asaita00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-note">© 2024 - All Rights Reserved</p>
    </div>
  );
}
