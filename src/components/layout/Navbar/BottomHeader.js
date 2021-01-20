import { useState } from "react";
import "./BottomHeader.css";

// Listings
import verticalMenuItems from "./MenuItems/vertical-menu";

const BottomHeader = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="bottom-header">
      <div className="customer_container bottom-header__flexbox">
        <div className="bottom-header__vertical-nav">
          <div
            className="bottom-header__alldepartments"
            style={
              menuToggle
                ? { borderRadius: "10px 10px 0 0" }
                : { borderRadius: "10px" }
            }
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <i className="fas fa-bars"></i>
            <span>All Departments</span>
          </div>
          <div
            className="bottom-header__navlist"
            style={menuToggle ? { display: "block" } : { display: "none" }}
          >
            <ul className="vertical-menu__dropdown">
              {verticalMenuItems.map((item) => (
                <li key={item.title}>
                  <a href={item.link}>
                    <span>{item.title}</span>
                  </a>
                  {item.sub && (
                    <i
                      className="fas fa-chevron-right"
                      style={{ marginLeft: "" }}
                    ></i>
                  )}
                  {item.sub && (
                    <div className="row vertical-menu__sublist">
                      {item.sub.map((subitem) => (
                        <div
                          className={`col-1-${item.sub.length}`}
                          key={subitem.heading}
                        >
                          <h3 className="vertical-menu__sublist-title">
                            {subitem.heading}
                          </h3>

                          {subitem.titles.map((title) => (
                            <a href={title.link} key={title.title}>
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
          </div>
        </div>

        <nav className="bottom-header__horizontal-nav">
          <div></div>

          <div className="bottom-header__shippingtext">
            <span>Free Shipping on Orders PKR500+</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BottomHeader;
