import "./ProductReviewsHead.css";

const ProductReviewsHead = ({ value, numReviews, toggleForm, toggleValue }) => {
  return (
    <div className="productReviewsHead">
      <h2>Customer Reviews</h2>

      <div className="productReviewsHead__summary">
        <div>
          {[1, 2, 3, 4, 5].map((el, idx) => (
            <i
              key={idx}
              className={el <= value ? "fas fa-star filled" : "far fa-star"}
            ></i>
          ))}
          <span> Based on {numReviews} reviews</span>
        </div>

        <button
          className="productReviewsHead__writeReviewBtn"
          onClick={() => toggleForm((prev) => !prev)}
        >
          {!toggleValue ? "Write a review" : "Close review form"}
        </button>
      </div>
    </div>
  );
};

export default ProductReviewsHead;
