import { useState } from "react";
import "../stylesheets/newReviewForm.css";

function NewReview() {
  return (
    <div className="new-review-container">
      <div>
        <span>Glow Med Spa</span>
      </div>
      <form className="new-review-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="stars">Number of Stars</label>
          <input
            id="stars"
            type="number"
            placeholder="number of stars"
            min="1"
            max="5"
            name="stars"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            placeholder="description"
            name="reviewText"
          />
        </div>
        <div className="buttons">
          <button>cancel</button>
          <button>Post</button>
        </div>
      </form>
    </div>
  );
}
export default NewReview;
