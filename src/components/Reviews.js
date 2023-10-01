function Reviews({ review }) {
  const { name, picture, reviewText, stars } = review;

  function Starts() {
    let starsToDisplay = [];
    for (let i = 0; i < stars; i++) {
      starsToDisplay.push(<span key={i}>&#11088;</span>);
    }
    return starsToDisplay;
  }

  return (
    <div className="review-card">
      <div className="client-picture">
        <img src={picture} alt="clients" />
      </div>
      <div className="review-details-container">
        <div className="Client-name-container">
          <h3>{name}</h3>
        </div>
        <div className="stars">
          <Starts />
        </div>
        <div>
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
