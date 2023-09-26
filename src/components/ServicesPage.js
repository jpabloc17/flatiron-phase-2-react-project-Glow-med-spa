import { useState, useEffect } from "react";
import NewAppoinmentForm from "./NewAppoinmentForm";
import Service from "./Service";

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

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
      {displayForm ? (
        <NewAppoinmentForm setDisplayForm={setDisplayForm} />
      ) : null}
      <div className="service-page">
        {loading ? servicesList : <h1>Loading...</h1>}
      </div>
    </>
  );
}

export default ServicesPage;
