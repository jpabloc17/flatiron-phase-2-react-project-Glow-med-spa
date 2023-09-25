import { useState, useEffect } from "react";

import Service from "./Service";
function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [displayForm, setDisplayForm] = useState(false);

  function handleSubmit() {
    setDisplayForm((displayForm) => !displayForm);
  }

  function Form() {
    return (
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Firts Name</label>
        <input id="name" type="text" placeholder="name" required />
        <label htmlFor="lastName">Last Name</label>
        <input id="last-name" type="text" placeholder="last-name" required />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="email" required />
        <label htmlFor="phone-number">Phone Number</label>
        <input
          id="phone-number"
          type="tel"
          placeholder="phone number"
          required
        />
        <label htmlFor="date">Select Date</label>
        <input id="date" type="date" placeholder="name" required />
        <label htmlFor="time">Select Time</label>
        <input id="time" type="time" placeholder="name" required />
        <button type="submit">Submit</button>
      </form>
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
      {displayForm ? <Form /> : null}
      <div>{loading ? servicesList : <h1>Loading...</h1>}</div>
    </>
  );
}

export default ServicesPage;
