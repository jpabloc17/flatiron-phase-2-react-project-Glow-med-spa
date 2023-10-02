import { useState, useEffect } from "react";
import NewAppoinmentForm from "./NewAppoinmentForm";
import Service from "./Service";

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

  const [successMassage, setSuccessMessage] = useState(false);

  function Alert() {
    return (
      <div className="alert-box">
        <h3>Thank you, your appointment has been successfully booked.</h3>
        <button
          onClick={() => setSuccessMessage((successMassage) => !successMassage)}
        >
          X
        </button>
      </div>
    );
  }

  useEffect(() => {
    fetch("http://localhost:3001/spa_services")
      .then((resp) => resp.json())
      .then((services) => {
        setServices(services);
        setLoading(true);
      });
  }, []);

  const servicesList = services.map((service) => {
    return (
      <Service
        key={service.id}
        service={service}
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
      />
    );
  });

  return (
    <>
      {successMassage ? <Alert /> : null}
      {displayForm ? (
        <NewAppoinmentForm
          setDisplayForm={setDisplayForm}
          setSuccessMessage={setSuccessMessage}
        />
      ) : null}
      <div className="service-page">
        {loading ? (
          servicesList
        ) : (
          <h1 className="loading-message">Loading...</h1>
        )}
      </div>
    </>
  );
}

export default ServicesPage;
