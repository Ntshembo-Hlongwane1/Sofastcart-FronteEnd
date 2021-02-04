import { useState } from "react";
import "./ProductReviews.css";

// Components
import ProductReviewsHead from "./ProductReviewsHead/ProductReviewsHead";
import ProductReviewsForm from "./ProductReviewsForm/ProductReviewsForm";
import ProductReviewsList from "./ProductReviewsList/ProductReviewsList";

const ProductReviews = ({ reviews }) => {
  const [formToggle, setFormToggle] = useState(false);

  const averageRating = Math.floor(
    reviews.reduce((acc, el) => acc + el.value, 0) / reviews.length
  );

  return (
    <div className="productReviews customer_container">
      <ProductReviewsHead
        value={averageRating}
        numReviews={reviews.length}
        toggleForm={setFormToggle}
        toggleValue={formToggle}
      />

      {formToggle && <ProductReviewsForm />}

      <ProductReviewsList reviews={reviews} />
    </div>
  );
};

export default ProductReviews;
