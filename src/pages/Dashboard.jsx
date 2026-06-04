function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-stats">
        <div className="card">
          <h3>Total Complaints</h3>
          <h1>30</h1>
        </div>

        <div className="card">
          <h3>In Progress</h3>
          <h1>10</h1>
        </div>

        <div className="card">
          <h3>Resolved</h3>
          <h1>12</h1>
        </div>
      </div>

      <div className="hc-recent">
        <h2>Complaints Overview</h2>

        <table className="hc-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
              <th>Severity</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Electrical</td>
              <td>
  <span className="status-badge badge-progress">
    In Progress
  </span>
</td>
              <td>High</td>
              <td>03/06/2026</td>
            </tr>

            <tr>
              <td>Mess</td>
              <td>
  <span className="status-badge badge-resolved">
    Resolved
  </span>
</td>
              <td>Medium</td>
              <td>01/06/2026</td>
            </tr>

            <tr>
              <td>Plumbing</td>
              <td>
  <span className="status-badge badge-pending">
    Submitted
  </span>
</td>
              <td>High</td>
              <td>28/05/2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;