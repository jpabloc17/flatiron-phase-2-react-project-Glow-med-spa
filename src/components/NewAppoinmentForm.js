import "../stylesheets/form.css";

function NewAppoinmentForm({ setDisplayForm }) {
  function handleSubmit(e) {
    e.preventDefault();
    setDisplayForm((displayForm) => !displayForm);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">Firts Name</label>
      <input id="name" type="text" placeholder="name" /* required */ />
      <label htmlFor="last-name">Last Name</label>
      <input
        id="last-name"
        type="text"
        placeholder="last-name" /* required */
      />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="email" /* required */ />
      <label htmlFor="phone-number">Phone Number</label>
      <input
        id="phone-number"
        type="tel"
        placeholder="phone number" /* required */
      />
      <label htmlFor="date">Select Date</label>
      <input id="date" type="date" placeholder="name" /* required */ />
      <label htmlFor="time">Select Time</label>
      <input id="time" type="time" placeholder="name" /* required */ />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewAppoinmentForm;
