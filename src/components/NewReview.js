import { useState } from "react";
import "../stylesheets/newReviewForm.css";

function NewReview({
  setDisplayReviewForm,
  displayReviewForm,
  onHandleUpdateReviews,
}) {
  const [reviewData, setReviewData] = useState({
    name: "",
    stars: "",
    reviewText: "",
    picture:
      "https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg",
  });

  function handleChange(e) {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisplayReviewForm(!displayReviewForm);
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    };

    fetch("http://localhost:3001/reviews", configObj)
      .then((resp) => resp.json())
      .then((data) => onHandleUpdateReviews(data));
    setReviewData({ ...reviewData, name: "", stars: "", reviewText: "" });
  }

  return (
    <div className="new-review-container">
      <div>
        <span>Glow Med Spa</span>
      </div>
      <form className="new-review-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            name="name"
            value={reviewData.name}
            onChange={handleChange}
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
            value={reviewData.stars}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            placeholder="description"
            name="reviewText"
            value={reviewData.reviewText}
            onChange={handleChange}
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
