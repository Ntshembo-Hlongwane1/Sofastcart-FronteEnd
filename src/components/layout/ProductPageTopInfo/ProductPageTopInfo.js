import { useState } from "react";

import "./ProductPageTopInfo.css";

const ProductPageTopInfo = ({ product }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const onQuantityChange = (e) => {
    const operationType = e.target.id;

    if (operationType === "inc-qty" && qty < product.quantityInStock) {
      setQty((prevQty) => prevQty + 1);
    } else if (operationType === "desc-qty" && qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div className="productPageTopInfo__productSummary customer_container">
      {/* IMAGES SECTION */}

      <div className="productPageTopInfo__images">
        <img
          className="productPageTopInfo__images-main"
          src={product.images[imageIdx]}
          alt="product showcase"
        />
        <div className="productPageTopInfo__thumbnails">
          {product.images.map((img, idx) => (
            <div
              className="productPageTopInfo__thumbnail"
              key={idx}
              style={
                imageIdx === idx ? { borderBottom: "2px solid #fed700" } : null
              }
              onClick={() => setImageIdx(idx)}
            >
              <img src={img} alt="product thumbnail showcase" />
            </div>
          ))}
        </div>
      </div>

      {/* SUMMARY INFO SECTION */}
      <div className="productPageTopInfo__summary">
        <div className="productPageTopInfo__summary-head">
          <p className="productPageTopInfo__vendor">{product.vendor}</p>
          <h4 className="productPageTopInfo__productName">{product.title}</h4>
          <div className="productPageTopInfo__rating">
            <div>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>

            <span>(No reviews)</span>

            <a href="#customer-reviews">Add Your Review</a>
          </div>
        </div>

        <div className="productPageTopInfo__summary-middle">
          <ul>
            {product.specifications.slice(0, 4).map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
        </div>

        <div className="productPageTopInfo__summary-bottom">
          <ul>
            <li>Brand: {product.brand}</li>
            <li>Category: {product.category}</li>
          </ul>
        </div>
      </div>

      {/* PRICING SECTION */}

      <div className="productPageTopInfo__pricing">
        <div>
          <p className="productPageTopInfo__availablity">
            <span>Available: </span>
            <span
              style={
                product.quantityInStock > 0
                  ? { color: "#4bd964" }
                  : { color: "#ee1d00" }
              }
            >
              {product.quantityInStock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="productPageTopInfo__price">
            <span>Rs </span>
            <span>{product.price}</span>
          </p>
          <div className="productPageTopInfo__qty">
            <label htmlFor="quantity">Quantity</label>
            <div className="productPageTopInfo__qty-selector">
              <input
                type="number"
                id="quantity"
                min="1"
                max={product.quantityInStock}
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <div>
                <span id="inc-qty" onClick={onQuantityChange}>
                  +
                </span>
                <span id="desc-qty" onClick={onQuantityChange}>
                  -
                </span>
              </div>
            </div>
          </div>

          <button className="productPageTopInfo__addCartBtn">
            <i className="fas fa-shopping-cart"></i>
            <span>Add to cart</span>
          </button>

          <button className="productPageTopInfo__wishlistBtn">
            <i className="far fa-heart"></i>
            <span>Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageTopInfo;
