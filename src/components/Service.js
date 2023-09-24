import "../stylesheets/service.css";

function Service({ service }) {
  const { image, name, price, description, time } = service;
  return (
    <div className="service-container">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="details-container">
        <div className="service-title">
          <h2>{name}</h2>
        </div>
        <p>{description}</p>
        <div>
          <span>
            &#65284;{`${price}`} &#128336; {time} minutes
          </span>
          <span></span>
        </div>
      </div>
      <button>Book</button>
    </div>
  );
}

export default Service;
