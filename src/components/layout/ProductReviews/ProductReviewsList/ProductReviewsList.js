import "./ProductReviewsList.css";

// Components
import ProductReviewsItem from "./ProductReviewsItem/ProductReviewsItem";

const ProductReviewsList = ({ reviews }) => {
  return (
    <div className="productReviewsList">
      {reviews.map((review, idx) => (
        <ProductReviewsItem
          key={idx}
          body={review.body}
          date={review.date}
          author={review.author}
          value={review.value}
        />
      ))}
    </div>
  );
};

export default ProductReviewsList;
