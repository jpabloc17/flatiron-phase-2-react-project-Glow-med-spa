import { useState, useEffect } from "react";

import Service from "./Service";
function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/spa_services")
      .then((resp) => resp.json())
      .then((services) => {
        setServices(services);
        setLoading(true);
      });
  }, []);

  const servicesList = services.map((service) => {
    return <Service key={service.id} service={service} />;
  });

  return <div>{loading ? servicesList : <h1>Loading...</h1>}</div>;
}

export default ServicesPage;
