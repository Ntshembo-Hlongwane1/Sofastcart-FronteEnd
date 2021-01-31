import { useState } from "react";

import "./HugeProductCard.css";

const HugeProductCard = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div
      className="hugeproductcard"
      onClick={() => console.log("Clicked Card")}
    >
      <div className="hugeproductcard__topInfo">
        <p className="hugeproductcard__vendor">{product.vendor}</p>
        <p className="hugeproductcard__title">{product.title}</p>
      </div>

      <div className="hugeproductcard__image">
        <img src={product.img[activeImage]} alt={product.title} />
        <span className="hugeproductcard__savebadge">
          <span>Save</span>
          <span>10%</span>
        </span>
      </div>

      <div className="hugeproductcard__thumbnails">
        {product.img.map((image, idx) => (
          <div
            key={idx}
            className="hugeproductcard__thumbnails-container"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(idx);
            }}
          >
            <img src={image} alt="product thumbnail" />
          </div>
        ))}
      </div>

      <div className="hugeproductcard__bottomInfo">
        <div className="hugeproductcard__prices">
          <p className="hugeproductcard__newprice">PKR {product.price}</p>
          <p className="hugeproductcard__oldprice">PKR 799.00</p>
        </div>
        <button
          className="hugeproductcard__cartbutton"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Clicked Cart");
          }}
        >
          <i className="fas fa-shopping-cart"></i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default HugeProductCard;
