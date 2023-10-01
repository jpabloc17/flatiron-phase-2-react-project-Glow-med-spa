import { useState, useEffect } from "react";
import "../stylesheets/table.css";

function Calendar() {
  const [appoinmentsInfo, setAppoinmentsInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/appoinments")
      .then((resp) => resp.json())
      .then((data) => {
        setAppoinmentsInfo(data);
        setLoading(true);
      });
  }, []);
  const tableData = appoinmentsInfo.map((client) => {
  return (
      <tr key={client.id}>
        <td>{client.date}</td>
        <td>
          {client.name} {client.lastName}
        </td>
        <td>{client.time}</td>
        <td>
          <button>cancel</button>
        </td>
      </tr>
    );
  });

  return loading ? (
    <div className="calendar-container">
      <h1>Calander</h1>
      <div className="calendar-details">
        <table className="table-information">
          <thead>
            <tr>
              <th>Date</th>
              <th>Client</th>
              <th>Time</th>
              <th>esthetician</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
        <tbody>{tableData}</tbody>
        </table>
      </div>
  ) : (
    <h1 className="loading-message">loading...</h1>
  );
}

export default Calendar;
