import { useEffect, useState } from "react";
import Reviews from "./Reviews";
import "../stylesheets/reviews.css";

function ReviewsList() {
  const [reviewsArr, setReviesArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((resp) => resp.json())
      .then((data) => setReviesArr(data));
  }, []);

  const reviewList = reviewsArr.map((review) => (
    <Reviews key={review.id} review={review} />
  ));

  return (
    <div className="reviews">
      <h3>Here are some reviews from our satisfied customers</h3>
      <div className="reviews-container">{reviewList}</div>
    </div>
  );
}

export default ReviewsList;
