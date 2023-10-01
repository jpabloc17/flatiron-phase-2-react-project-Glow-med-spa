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

  function handleCancelations(clientToRemove) {
    fetch(`http://localhost:3001/appoinments/${clientToRemove.id}`, {
      method: "DELETE",
    });

    const updateAppoinmentsInfo = appoinmentsInfo.filter(
      (client) => client.id !== clientToRemove.id
    );
    setAppoinmentsInfo(updateAppoinmentsInfo);
  }

  const tableData = appoinmentsInfo.map((client) => {
    return (
      <tr key={client.id}>
        <td>{client.date}</td>
        <td>
          {client.name} {client.lastName}
        </td>
        <td>{client.time}</td>
        <td>
          <button onClick={() => handleCancelations(client)}>cancel</button>
        </td>
      </tr>
    );
  });

  return loading ? (
    <div className="calendar-container">
      <table className="table-information">
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Time</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {appoinmentsInfo.length === 0 ? (
            <tr>
              <td colSpan={4}>No appoinments Yet</td>
            </tr>
          ) : (
            tableData
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <h1 className="loading-message">loading...</h1>
  );
}

export default Calendar;
