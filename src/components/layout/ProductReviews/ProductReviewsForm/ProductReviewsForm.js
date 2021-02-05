import { useState } from "react";
import "./ProductReviewsForm.css";

const ProductReviewsForm = () => {
  const [savedRating, setSavedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState();
  const [name, setName] = useState("");
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  return (
    <div className="productReviewsForm">
      <h2>Write a reviews</h2>
      <div className="productReviewsForm__form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter you name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <div className="productReviewsForm__rating">
              {[1, 2, 3, 4, 5].map((el, idx) => (
                <i
                  key={idx}
                  onMouseEnter={() => setHoverRating(el)}
                  onMouseLeave={() => setHoverRating()}
                  onClick={() => setSavedRating(el)}
                  className={
                    hoverRating
                      ? hoverRating < el
                        ? "far fa-star"
                        : "fas fa-star filled"
                      : savedRating < el
                      ? "far fa-star"
                      : "fas fa-star filled"
                  }
                ></i>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="review-title">Review Title</label>
            <input
              id="review-title"
              type="text"
              placeholder="Give your review a title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="form-group">
            <label>Body of review (1500)</label>
            <textarea
              name="review-body"
              id="review-body"
              cols="30"
              rows="10"
              placeholder="Write your comments here"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </div>

          <div className="productReviewsForm__submitReview">
            <button>Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductReviewsForm;
