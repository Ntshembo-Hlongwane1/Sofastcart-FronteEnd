import ReactCountryFlag from "react-country-flag";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="customer_container top-header__flexbox">
        <div className="top-header__left">
          <ul>
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>(+800) 123 456 7890</span>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <span>sample@email.com</span>
            </li>
          </ul>
        </div>

        <div className="top-header__right">
          <ul>
            <li>
              <a href="!#">
                <i className="fas fa-map-marker-alt"></i> Store Location
              </a>
            </li>
            <li>
              <a href="!#">
                <i className="fas fa-truck"></i> Track Your Order
              </a>
            </li>
            <li>
              <a href="!#">
                <i className="fas fa-user-alt"></i> Register or Sign in
              </a>
            </li>
            <li>
              <div className="top-header__countryflag">
                <ReactCountryFlag
                  countryCode="PK"
                  svg
                  title="Pakistan"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;