import "./HugeProductCard.css";

const HugeProductCard = ({ product }) => {
  return (
    <div className="hugeproductcard">
      <div className="hugeproductcard__topInfo">
        <p className="hugeproductcard__vendor">{product.vendor}</p>
        <p className="hugeproductcard__title">{product.title}</p>
      </div>

      <div className="hugeproductcard__image">
        <img src={product.img} alt={product.title} />
        <span className="hugeproductcard__savebadge">
          <span>Save</span>
          <span>10%</span>
        </span>
      </div>

      <div className="hugeproductcard__bottomInfo">
        <p className="hugeproductcard__price">PKR {product.price}</p>
        <button className="hugeproductcard__cartbutton">
          <i className="fas fa-shopping-cart"></i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default HugeProductCard;
