import "../stylesheets/service.css";

function Service({ service }) {
  console.log(service);
  const { image, name, price, description } = service;
  return (
    <div className="service-container">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="details-container">
        <div className="service-title">
          <span>{name}</span>
        </div>
        <p>{description}</p>
        <div>
          <span>&#65284;{`${price}`} &#128336; 30 minutes</span>
          <span></span>
        </div>
      </div>
      <button>Book</button>
    </div>
  );
}

export default Service;
