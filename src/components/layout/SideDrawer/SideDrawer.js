import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import "./SideDrawer.css";

// Components
import Backdrop from "../Backdrop/Backdrop";

// Lists
import verticalMenuItems from "../Navbar/MenuItems/vertical-menu";

const SideDrawer = ({ show, bgClicked }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [back, setBack] = useState(false);

  useEffect(() => {
    if (back === true) {
      setActiveIndex(-1);
      setBack(false);
    }
  }, [back]);

  return (
    <>
      <div className={`sidedrawer ${show && "show"}`}>
        <ul className="sidedrawer__alldepartments">
          <li>
            <ul className="sidedrawer__icons">
              <li>
                <Link to="/account">
                  <i className="far fa-user"></i>
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <div className="icon-badge__container">
                    <i className="far fa-heart"></i>
                    <span
                      className="icon-badge"
                      style={{ backgroundColor: "#333e48", color: "#fff" }}
                    >
                      0
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <a href="!#" className="sidedrawer__countryflag">
                  <ReactCountryFlag
                    countryCode="ZA"
                    svg
                    title="South Africa"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </li>
            </ul>
          </li>
          {verticalMenuItems.map((item, index) => (
            <li
              key={item.title}
              className={`sidedrawer__menuitem ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <a href={item.link}>{item.title}</a>
              {item.sub && (
                <i
                  className="fas fa-chevron-right"
                  style={{ marginLeft: "" }}
                ></i>
              )}
              {item.sub && (
                <div className="sidedrawer__sublist">
                  <button onClick={() => setBack(true)}>
                    <i className="fas fa-chevron-left"></i>
                    <span>{item.title}</span>
                  </button>
                  {item.sub.map((subitem) => (
                    <div key={subitem.heading} className="sublist__item">
                      <h3 className="sidedrawer__sublist-title">
                        {subitem.heading}
                      </h3>

                      {subitem.titles.map((title) => (
                        <a
                          href={title.link}
                          key={title.title}
                          className="sublist__links"
                        >
                          {title.title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <ul className="sidedrawer__contactinfo">
          <li>
            <Link to="/contact-us">
              <i className="fas fa-phone-alt"></i>
              <span>Call</span>
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <i className="far fa-envelope"></i>
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              <i className="fas fa-globe"></i>
              <span>Store info</span>
            </Link>
          </li>
          <li>
            <Link to="/store-location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Directions</span>
            </Link>
          </li>
        </ul>
      </div>
      <Backdrop clicked={bgClicked} show={show} />
    </>
  );
};

export default SideDrawer;
