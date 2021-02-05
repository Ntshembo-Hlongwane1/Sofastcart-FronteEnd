import "./ProductReviewsItem.css";

const ProductReviewsItem = ({
  author = "Lloyd",
  date = "2020-04-23",
  value = 4,
  body,
}) => {
  return (
    <div className="productReviewsItem">
      <div className="productReviewsItem__info">
        <div className="productReviewsItem__info-author">
          <span>{author} </span>on
          <span> {date}</span>
        </div>

        <div className="productReviewsItem_info-rating">
          {[1, 2, 3, 4, 5].map((el, idx) => (
            <i
              key={idx}
              className={el <= value ? "fas fa-star filled" : "far fa-star"}
            ></i>
          ))}
        </div>
      </div>

      <p className="productReviewsItem__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        accusantium sit veritatis tenetur debitis voluptatem.
      </p>
    </div>
  );
};

export default ProductReviewsItem;
