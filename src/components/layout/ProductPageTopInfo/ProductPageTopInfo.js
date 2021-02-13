import { useState } from "react";
import { Link } from "react-scroll";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'

import "./ProductPageTopInfo.css";

const ProductPageTopInfo = ({ product }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const { productId } = useParams();
  const history = useHistory()
  let prodPrice;
  let image;
  let name;
  const averageRating = Math.floor(
    product.reviews.reduce((acc, el) => acc + el.value, 0) /
      product.reviews.length
  );

  const onQuantityChange = (e) => {
    const operationType = e.target.id;

    if (operationType === "inc-qty" && qty < product.quantityInStock) {
      setQty((prevQty) => prevQty + 1);
    } else if (operationType === "desc-qty" && qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  const addToCart = (e)=>{
    const cart = JSON.parse(localStorage.getItem('swixavo')) || [];
    const newProduct = {
      _id:productId,
      name,
      image,
      prodPrice,
      qty
    };

    let isProductExisting = false;

    for (let i=0; i<cart.length;i++){
      if (cart[i]._id === productId){
        isProductExisting = true;
      }
    }

    if (isProductExisting){
      const updatedCart = cart.map((item)=> item._id === productId ? newProduct : item);
      let total = 0;
      for (let i=0; i<updatedCart.length;i++){
        let productPrice = parseInt(updatedCart[i].prodPrice)
        let quantity = parseInt(updatedCart[i].qty);

        total += productPrice * quantity;
      }
      localStorage.setItem('swixavo', JSON.stringify(updatedCart));
      localStorage.setItem('nxavo', total);
      history.push('/shopping-cart');
    }else{
      cart.push(newProduct)
      let total = 0;
      for (let i=0; i<cart.length;i++){
        let productPrice = parseInt(cart[i].prodPrice)
        let quantity = parseInt(cart[i].qty);
        total += productPrice * quantity;
      }
      localStorage.setItem('swixavo', JSON.stringify(cart));
      localStorage.setItem('nxavo', total);
      history.push('/shopping-cart');
      
    }
  }

  return (
    <div className="productPageTopInfo__productSummary customer_container">
      {/* IMAGES SECTION */}
      <div className="productPageTopInfo__images">
        <img
          className="productPageTopInfo__images-main"
          src={product.images[imageIdx]}
          alt="product showcase"
        />
        {
          image=product.images[imageIdx]
        }
        <div className="productPageTopInfo__thumbnails">
          {product.images.map((img, idx) => (
            <div
              className="productPageTopInfo__thumbnail"
              key={idx}
              style={
                imageIdx === idx ? { borderBottom: "2px solid #042e54" } : null
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
          {
            name=product.title
          }
          <div className="productPageTopInfo__rating">
            <div>
              {[1, 2, 3, 4, 5].map((el, idx) => (
                <i
                  key={idx}
                  className={
                    el <= averageRating ? "fas fa-star filled" : "far fa-star"
                  }
                ></i>
              ))}
            </div>

            <span>
              {product.reviews.length > 0
                ? `(${product.reviews.length} reviews)`
                : "(No reviews)"}
            </span>

            <Link to="customer-reviews" smooth={true} spy={true} offset={-250}>
              Add Your Review
            </Link>
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
            {
              prodPrice=product.price
            }
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

          <button onClick={addToCart}  className="btn btn-primary btn-block">
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
