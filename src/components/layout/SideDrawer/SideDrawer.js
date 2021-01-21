import { useState, useEffect } from "react";
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
                <a href="!#">
                  <i className="far fa-user"></i>
                </a>
              </li>
              <li>
                <a href="!#">
                  <div className="icon-badge__container">
                    <i className="far fa-heart"></i>
                    <span
                      className="icon-badge"
                      style={{ backgroundColor: "#333e48", color: "#fff" }}
                    >
                      0
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="!#" className="sidedrawer__countryflag">
                  <ReactCountryFlag
                    countryCode="PK"
                    svg
                    title="Pakistan"
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
            <a href="!#">
              <i className="fas fa-phone-alt"></i>
              <span>Call</span>
            </a>
          </li>
          <li>
            <a href="!#">
              <i className="far fa-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="!#">
              <i className="fas fa-globe"></i>
              <span>Store info</span>
            </a>
          </li>
          <li>
            <a href="!#">
              <i className="fas fa-map-marker-alt"></i>
              <span>Directions</span>
            </a>
          </li>
        </ul>
      </div>
      <Backdrop clicked={bgClicked} show={show} />
    </>
  );
};

export default SideDrawer;
