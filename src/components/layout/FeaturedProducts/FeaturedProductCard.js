import "./FeaturedProductCard.css";

const FeaturedProductCard = ({ product }) => {
  return (
    <div className="featuredproductcard">
      <div className="featuredproductcard__topInfo">
        <p className="featuredproductcard__vendor">{product.vendor}</p>
        <p className="featuredproductcard__title">{product.title}</p>
      </div>
      <div className="featuredproductcard__image">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="featuredproductcard__bottomInfo">
        <p className="featuredproductcard__price">PKR {product.price}</p>
        <button>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
