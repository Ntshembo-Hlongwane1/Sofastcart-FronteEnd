import { Link } from "react-router-dom";
import "./FPCard-Two.css";

const FpCardTwo = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="fpcardTwo">
      <div className="fpcardTwo__topInfo">
        <p className="fpcardTwo__vendor">{product.vendor}</p>
        <p className="fpcardTwo__title">{product.title}</p>
      </div>
      <div className="fpcardTwo__image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="fpcardTwo__bottomInfo">
        <p className="fpcardTwo__price">Rs {product.price}</p>
        <button>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </Link>
  );
};

export default FpCardTwo;
