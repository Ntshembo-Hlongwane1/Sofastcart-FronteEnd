import { useEffect } from "react";
import "./ContactUs.css";

// Components
import Breadcrumbs from "../../layout/Breadcrumb/Breadcrumb";
import Map from "../../layout/Map/Map";
import storeLocation from "../../../assets/store-locations";

const path = [{ title: "Contact Us", link: "/contact-us" }];

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });
  return (
    <div className="contactus customer_container">
      <Breadcrumbs route={path} />
      <div className="contactus__flexbox">
        <div className="contactus__form">
          <form>
            <div className="contactus__form-title">
              <h3>Leave A Message</h3>
            </div>
            <small className="contactus__form-subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dolorum modi reprehenderit quibusdam placeat error deleniti
              voluptatum eaque ad aut?
            </small>
            <div className="contactus__form-row">
              <div
                className="contactus__form-group"
                style={{ flex: "0.5", marginRight: "1.5rem" }}
              >
                <label htmlFor="name">Name*</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="contactus__form-group" style={{ flex: "0.5" }}>
                <label htmlFor="name">Email*</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>

            <div className="contactus__form-row">
              <div className="contactus__form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" />
              </div>
            </div>

            <div className="contactus__form-row">
              <div className="contactus__form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="10"
                  cols="30"
                  type="text"
                  name="message"
                  id="message"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div className="contactus__map">
          <Map zoom={11} eventData={storeLocation} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
