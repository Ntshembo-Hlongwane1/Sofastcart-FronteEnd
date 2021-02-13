import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Components
import Spinner from "../Spinner/Spinner";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";

// products
import products from "../../../assets/productData";

const Footer = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: MAKE REQUEST FOR DATA TO API

    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        setProductData(products);
        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  const onNewsletterSubmission = (e) => {
    e.preventDefault();

    if (inputEmail !== "") {
      console.log("submiting newsletter...");
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : productData ? (
        <ProductsCarousel catagoryName="Latest products" products={products} />
      ) : (
        <h3>Something went wrong please reload page!</h3>
      )}
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

              <form
                onSubmit={onNewsletterSubmission}
                className="footer__newsletter-form"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        {/* main-footer-info */}
        <div className="footer__middleInfo">
          <div className="customer_container footer__middleInfo-grid">
            <div className="footer__gridItem contactInfo">
              <div className="footer__logo-container">
                <Link to="/">
                  <span className="footer__logo">Sofast</span>Cart
                </Link>
              </div>

              <div className="footer__callUs">
                <i className="fas fa-headset"></i>
                <div>
                  <small>Got questions? Call us 24/7</small>
                  <p>(800) 8001-8588 or (0600) 874 548</p>
                </div>
              </div>

              <div className="footer__contactInfo">
                <p>
                  <strong>Contact info</strong>
                </p>
                <p>17 Princess Roadm, London, Greater Londen NW1 8JR, UK</p>
              </div>

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
                  <Link to="/products/daily-deals">Daily Deals</Link>
                </li>
                <li>
                  <Link to="/products/featured">Featured</Link>
                </li>
                <li>
                  <Link to="/products/on-sale">On sale</Link>
                </li>
                <li>
                  <Link to="/products/clearance-sale">Clearance Sale</Link>
                </li>
                <li>
                  <Link to="/products/best-deals">Best Deals</Link>
                </li>
                <li>
                  <Link to="/products/top-rated">Top Rated</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN THREE */}
            <div className="footer__gridItem help">
              <p className="footer__columnTitle">Help</p>
              <ul className="footer__list">
                <li>
                  <Link to="/contact-us">Help</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/shipping-delivery">Shipping & Delivery</Link>
                </li>
                <li>
                  <Link to="/exhanges-returns">Exchanges & Returns</Link>
                </li>
                <li>
                  <Link to="/suggest a product">Suggest a Product</Link>
                </li>
                <li>
                  <Link to="/store-location">Directions and Location</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN FOUR */}
            <div className="footer__gridItem accountFooter">
              <p className="footer__columnTitle">Account</p>
              <ul className="footer__list">
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li>
                  <Link to="/exhanges-returns">Exchanges & Returns</Link>
                </li>
                <li>
                  <Link to="/about-us">Personal Details</Link>
                </li>
                <li>
                  <Link to="/account/invoices">Invoices</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN FIVE */}
            <div className="footer__gridItem company">
              <p className="footer__columnTitle">Company</p>
              <ul className="footer__list">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/newsletter">Newsletter</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/store-location">Directions and Location</Link>
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
                <img src="./images/payment-icons.png" alt="Payment Icons" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
