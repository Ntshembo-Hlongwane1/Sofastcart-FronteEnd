import { Link } from "react-router-dom";
import "./Footer.css";

// Images
import paymentIcons from "../../../assets/payment-icons.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <div className="customer_container">
          <div className="footer__newsletter-flexbox">
            <span className="footer__newsletter-heading">
              <i className="far fa-paper-plane"></i>{" "}
              <span>Sign up to Newsletter</span>
            </span>

            <span className="footer__newsletter-subtext">
              ...and receive <strong>notification about new products</strong>
            </span>

            <form className="footer__newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter your email address"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      {/* main-footer-info */}
      <div className="footer__middleInfo">
        <div className="customer_container footer__middleInfo-grid">
          {/* COLUMN ONE */}
          <div className="footer__gridItem contactInfo">
            {/* Logo */}
            <div className="footer__logo-container">
              <Link to="/">
                <span className="footer__logo">Sofast</span>Cart.
              </Link>
            </div>
            {/* Call Icon + Number */}
            <div className="footer__callUs">
              <i className="fas fa-headset"></i>
              <div>
                <small>Got questions? Call us 24/7</small>
                <p>(800) 8001-8588 or (0600) 874 548</p>
              </div>
            </div>
            {/* Contact info */}
            <div className="footer__contactInfo">
              <p>
                <strong>Contact info</strong>
              </p>
              <p>17 Princess Roadm, London, Greater Londen NW1 8JR, UK</p>
            </div>
            {/* Social Media Links */}
            <div className="footer__socialMediaLink">
              <ul className="footer__list">
                <li>
                  <a href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN TWO */}
          <div className="footer__gridItem shop">
            <p className="footer__columnTitle">Shop</p>
            <ul className="footer__list">
              <li>
                <a href="!#">Daily Deals</a>
              </li>
              <li>
                <a href="!#">Featured</a>
              </li>
              <li>
                <a href="!#">On sale</a>
              </li>
              <li>
                <a href="!#">Clearance Sale</a>
              </li>
              <li>
                <a href="!#">Best Deals</a>
              </li>
              <li>
                <a href="!#">Top Rated</a>
              </li>
            </ul>
          </div>

          {/* COLUMN THREE */}
          <div className="footer__gridItem help">
            <p className="footer__columnTitle">Help</p>
            <ul className="footer__list">
              <li>
                <a href="!#">Help</a>
              </li>
              <li>
                <a href="!#">Contact Us</a>
              </li>
              <li>
                <a href="!#">Shipping & Delivery</a>
              </li>
              <li>
                <a href="!#">Exchanges & Returns</a>
              </li>
              <li>
                <a href="!#">Suggest a Product</a>
              </li>
              <li>
                <a href="!#">Directions and Location</a>
              </li>
            </ul>
          </div>

          {/* COLUMN FOUR */}
          <div className="footer__gridItem account">
            <p className="footer__columnTitle">Account</p>
            <ul className="footer__list">
              <li>
                <a href="!#">My Account</a>
              </li>
              <li>
                <a href="!#">Track Order</a>
              </li>
              <li>
                <a href="!#">Exchanges & Returns</a>
              </li>
              <li>
                <a href="!#">Personal Details</a>
              </li>
              <li>
                <a href="!#">Invoices</a>
              </li>
              <li>
                <a href="!#">Digital Library</a>
              </li>
            </ul>
          </div>

          {/* COLUMN FIVE */}
          <div className="footer__gridItem company">
            <p className="footer__columnTitle">Company</p>
            <ul className="footer__list">
              <li>
                <a href="!#">About Us</a>
              </li>
              <li>
                <a href="!#">Careers</a>
              </li>
              <li>
                <a href="!#">Blog</a>
              </li>
              <li>
                <a href="!#">Newsletter</a>
              </li>
              <li>
                <a href="!#">Terms & Conditions</a>
              </li>
              <li>
                <a href="!#">Directions and Location</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom-footer-info */}
      <div className="footer__bottomInfo">
        <div className="customer_container footer__bottomInfo-flexbox">
          <p className="footer__copyrights">
            Copyright &copy; Built by
            <a
              href="https://www.thefullstackjunkie.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              The Full Stack Junkie
            </a>
            . All Rights Reserved
          </p>
          <ul className="footer__payment-icons">
            <li>
              <img src={paymentIcons} alt="Payment Icons" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
