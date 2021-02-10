import { Link } from "react-router-dom";

import "./FPCard-One.css";

const FeaturedProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="featuredproductcard">
      <div className="featuredproductcard__topInfo">
        <p className="featuredproductcard__vendor">{product.vendor}</p>
        <p className="featuredproductcard__title">{product.title}</p>
      </div>
      <div className="featuredproductcard__image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="featuredproductcard__bottomInfo">
        <p className="featuredproductcard__price">Rs {product.price}</p>
        <button>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </Link>
  );
};

export default FeaturedProductCard;
