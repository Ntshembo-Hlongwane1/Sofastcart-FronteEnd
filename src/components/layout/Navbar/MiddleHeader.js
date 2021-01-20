import "./MiddleHeader.css";
import shoppingbag from "../../../assets/shopping-bag.svg";

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="customer_container middle-header__flexbox">
        <div className="middle-header__logo">
          <a href="!#">
            <span className="middle-header__logo-dark">Sofast</span>Cart
            <span className="middle-header__logo-dot">.</span>
          </a>
        </div>

        <div className="middle-header__searchbar">
          <form>
            <input type="text" placeholder="Search" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="middle-header__icons">
          <ul>
            <li>
              <a href="!#">
                <i className="far fa-user"></i>
              </a>
            </li>
            <li>
              <a href="!#">
                <div className="icon-badge__container">
                  <i className="far fa-heart"></i>
                  <span className="icon-badge">0</span>
                </div>
              </a>
            </li>
            <li>
              <a className="middle-header__shoppingbag" href="!#">
                <div className="icon-badge__container">
                  <img src={shoppingbag} alt="shopping bag icons" />
                  <span className="icon-badge">0</span>
                </div>
                <span className="middle-header__cartprice">$0.00</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
