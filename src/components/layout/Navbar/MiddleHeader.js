import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MiddleHeader.css";
import shoppingbag from "../../../assets/shopping-bag.svg";

const MiddleHeader = ({ clicked }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchToggle, setMobileSearchToggle] = useState(false);

  const onSearchHandler = () => {
    //TODO: make axios request to search route
    // TODO: populate setSearchResult with axios results
    setSearchResult([
      "Search Result #1",
      "Search Result #2",
      "Search Result #3",
    ]);
  };

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 180) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["middle-header"];

  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <div className={navbarClasses.join(" ")}>
      <div className="customer_container middle-header__flexbox">
        <div className="mobile-hamburger" onClick={clicked}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="middle-header__logo">
          <Link to="/">
            <span className="middle-header__logo-dark">Sofast</span>Cart
            <span className="middle-header__logo-dot">.</span>
          </Link>
        </div>

        <div className="middle-header__mobile-searchicon">
          <i
            className={`${
              mobileSearchToggle ? "fas fa-times" : "fas fa-search"
            }`}
            onClick={() => setMobileSearchToggle(!mobileSearchToggle)}
          ></i>
          <div>
            <a className="middle-header__mobile-shoppingbag" href="!#">
              <div className="icon-badge__container">
                <img src={shoppingbag} alt="shopping bag icons" />
                <span className="icon-badge">0</span>
              </div>
              <span className="middle-header__cartprice">$0.00</span>
            </a>
          </div>
        </div>

        {mobileSearchToggle && (
          <div className="middle-header__mobile-searchbar">
            <div className="customer_container">
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    onSearchHandler();
                  }}
                />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              {searchResult.length > 0 && searchTerm && (
                <div className="middle-header__mobile-search-results">
                  <ul className="middle-header__search-result-list">
                    {searchResult.map((result) => (
                      <li key={result}>
                        <a href="!#">{result}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="middle-header__searchbar">
          <form>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearchHandler();
              }}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          {searchResult.length > 0 && searchTerm && (
            <div className="middle-header__search-results">
              <ul className="middle-header__search-result-list">
                {searchResult.map((result) => (
                  <li key={result}>
                    <a href="!#">{result}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
