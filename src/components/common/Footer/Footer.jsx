import "./styles.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Index() {
  return (
    <footer className="footer-wrapper" role="contentinfo">
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
              <a href="mailto:info@rainbowstacomp.com" aria-label="Email Rainbow Computer Accessories and Stationery Supplier">
                info@rainbowstacomp.com
              </a>
              <br />
              <a href="tel:+25115573458" aria-label="Call Rainbow Computer Accessories and Stationery Supplier">
                +251 1 557 34 58
              </a>
            </div>
          </div>
        </div>
        <div className="footer-branding">
          <a href="/" className="logo" aria-label="Rainbow Computer Accessories and Stationery Supplier homepage">
            <img src="../../../images/logo.png" alt="Rainbow logo" />
          </a>
          <div className="socials-wrapper" aria-label="Rainbow social media links">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-note">© 2024 - All Rights Reserved</p>
    </footer>
  );
}
