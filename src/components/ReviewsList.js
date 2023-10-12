import { useEffect, useState } from "react";
import Reviews from "./Reviews";
import NewReview from "./NewReview";
import "../stylesheets/reviews.css";

function ReviewsList() {
  const [reviewsArr, setReviesArr] = useState([]);
  const [newReview, setNewReview] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((resp) => resp.json())
      .then((data) => setReviesArr(data));
  }, []);

  const reviewList = reviewsArr.map((review) => (
    <Reviews key={review.id} review={review} />
  ));

  function handleUpdateReviews(newReviewData) {
    setReviesArr([...reviewsArr, newReviewData]);
  }

  return (
    <div className="reviews">
      <h2>Client Love</h2>

      {newReview ? (
        <NewReview
          setDisplayReviewForm={setNewReview}
          displayReviewForm={newReview}
          onHandleUpdateReviews={handleUpdateReviews}
        />
      ) : (
        <button onClick={() => setNewReview((newReview) => !newReview)}>
          Leave a review
        </button>
      )}
      <div className="reviews-container">{reviewList}</div>
    </div>
  );
}

export default ReviewsList;
