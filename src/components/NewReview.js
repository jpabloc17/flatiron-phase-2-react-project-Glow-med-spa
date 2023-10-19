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
    picture: "",
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
        <div className="avatars-picture-container">
          <span>Picture</span>
          <input
            id="picture-1"
            name="picture"
            type="radio"
            value="https://static.vecteezy.com/system/resources/previews/009/749/878/non_2x/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
            onChange={handleChange}
          />
          <label htmlFor="picture-1">
            <img
              className="radio-options"
              src="https://static.vecteezy.com/system/resources/previews/009/749/878/non_2x/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
              alt="avatar"
            />
          </label>
          <input
            id="picture-2"
            name="picture"
            type="radio"
            value="https://static.vecteezy.com/system/resources/previews/009/749/643/original/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
            onChange={handleChange}
          />
          <label htmlFor="picture-2">
            <img
              className="radio-options"
              src="https://static.vecteezy.com/system/resources/previews/009/749/643/original/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
              alt="avatar"
            />
          </label>
          <input
            id="picture-3"
            name="picture"
            type="radio"
            value="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
            onChange={handleChange}
          />
          <label htmlFor="picture-3">
            <img
              className="radio-options"
              src="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
              alt="avatar"
            />
          </label>
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
