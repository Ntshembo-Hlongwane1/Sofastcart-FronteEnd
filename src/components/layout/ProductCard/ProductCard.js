import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productcard">
      <div className="productcard__topInfo">
        <p className="productcard__vendor">{product.vendor}</p>
        <p className="productcard__title">{product.title}</p>
      </div>
      <div className="productcard__image">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="productcard__bottomInfo">
        <p className="productcard__price">PKR {product.price}</p>
        <button>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
