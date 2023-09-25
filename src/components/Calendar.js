function Calendar({ tableinformation }) {
  const { date, client, time, esthetician } = tableinformation[0];

  return (
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
          <tbody>
            <tr>
              <td>{date}</td>
              <td>{client}</td>
              <td>{time}</td>
              <td>{esthetician}</td>
              <td>
                <button>reschedule</button>
              </td>
              <td>
                <button>cancel</button>
              </td>
            </tr>
            <tr>
              <td>{date}</td>
              <td>{client}</td>
              <td>{time}</td>
              <td>{esthetician}</td>
              <td>
                <button>reschedule</button>
              </td>
              <td>
                <button>cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
