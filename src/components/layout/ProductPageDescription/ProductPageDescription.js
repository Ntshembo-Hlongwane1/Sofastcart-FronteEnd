import { useState } from "react";
import parse from "html-react-parser";

import "./ProductPageDescription.css";

import ShippingReturnsText from "../../../assets/Shipping&ReturnsText";

const ProductPageDescription = ({ desc, specs }) => {
  const [tabIdx, setTabIdx] = useState(0);

  let displayInfo = (
    <p className="productPageDesc__info-shipping">{parse(desc)}</p>
  );

  switch (tabIdx) {
    case 0:
      displayInfo = (
        <div className="productPageDesc__info-shipping">{parse(desc)}</div>
      );
      break;
    case 1:
      displayInfo = (
        <ul className="productPageDesc__info-specs">
          {specs.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      );
      break;
    case 2:
      displayInfo = (
        <div className="productPageDesc__info-shipping">
          {parse(ShippingReturnsText)}
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div className="productPageDesc">
      <div className="customer_container">
        <div className="productPageDesc__container">
          <nav>
            <ul className="productPageDesc__navigation">
              <li
                onClick={() => setTabIdx(0)}
                className={`productPageDesc__navigation-item ${
                  tabIdx === 0 ? "active" : null
                }`}
              >
                Description
              </li>
              <li
                onClick={() => setTabIdx(1)}
                className={`productPageDesc__navigation-item ${
                  tabIdx === 1 ? "active" : null
                }`}
              >
                Specifications
              </li>
              <li
                onClick={() => setTabIdx(2)}
                className={`productPageDesc__navigation-item ${
                  tabIdx === 2 ? "active" : null
                }`}
              >
                Shipping & Returns
              </li>
            </ul>
          </nav>
          <div className="productPageDesc__displayInfo">{displayInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageDescription;
