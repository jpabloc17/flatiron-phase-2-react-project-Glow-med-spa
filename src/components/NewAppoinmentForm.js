import { useState } from "react";
import "../stylesheets/form.css";

function NewAppoinmentForm({ setDisplayForm, setSuccessMessage }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisplayForm((displayForm) => !displayForm);
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3001/appoinments", configObj)
      .then((resp) => resp.json())
      .then(() => setSuccessMessage((successMessage) => !successMessage));
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">Firts Name</label>
      <input
        id="name"
        type="text"
        placeholder=" First Name"
        name="name"
        value={formData.name}
        required
        onChange={handleChange}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        id="last-name"
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        required
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        required
        onChange={handleChange}
      />
      <label htmlFor="phone-number">Phone Number</label>
      <input
        id="phone-number"
        type="tel"
        placeholder="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        required
        onChange={handleChange}
      />
      <label htmlFor="date">Select Date</label>
      <input
        id="date"
        type="date"
        name="date"
        value={formData.date}
        required
        onChange={handleChange}
      />
      <label htmlFor="time">Select Time</label>
      <input
        id="time"
        type="time"
        name="time"
        value={formData.time}
        required
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewAppoinmentForm;
