import { useState, useEffect } from "react";

import Service from "./Service";
function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/spa_services")
      .then((resp) => resp.json())
      .then((services) => setServices(services));
  }, []);

  const servicesList = services.map((service) => {
    return <Service key={service.id} service={service} />;
  });

  return <div>{servicesList}</div>;
}

export default ServicesPage;
