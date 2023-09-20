function Service() {
  return (
    <div className="service-container">
      <div className="image-container">
        <img
          src="https://handandstone.ca/wp-content/uploads/2016/03/swedish.jpg"
          alt="Imageof the service"
        />
      </div>
      <div className="details-container">
        <span>Swedish Massage</span>
        <span>$100</span>
        <p>
          Swedish Massage is the most common and best known type of massage. It
          involves long, fluid strokes of muscles and tissues with pressure that
          varies from light to medium to firm. This type of massage is
          considered to be one of the most relaxing styles. Your Registered
          Massage Therapist will adjust the pressure according to your
          sensitivity and preference.
        </p>
      </div>
      <button>Book</button>
    </div>
  );
}

export default Service;
