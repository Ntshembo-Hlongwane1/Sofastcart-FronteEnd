import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="productcard">
      <div className="productcard__topInfo">
        <p className="productcard__vendor">{product.vendor}</p>
        <p className="productcard__title">{product.title}</p>
      </div>
      <div className="productcard__image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="productcard__bottomInfo">
        <p className="productcard__price">Rs {product.price}</p>
        <button>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
