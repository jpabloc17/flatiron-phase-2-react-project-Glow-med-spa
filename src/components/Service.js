import "../stylesheets/service.css";

function Service({ url, name, price, details }) {
  return (
    <div className="service-container">
      <div className="image-container">
        <img src={url} alt="Imageof the service" />
      </div>
      <div className="details-container">
        <span>{name}</span>
        <span>{`$${price}`}</span>
        <p>{details}</p>
      </div>
      <button>Book</button>
    </div>
  );
}

export default Service;
