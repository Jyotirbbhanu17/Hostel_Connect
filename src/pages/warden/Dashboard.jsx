import { useNavigate } from "react-router-dom";
import complaints from "../../data/complaints";
import "../../styles/wardenDashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const totalComplaints = complaints.length;

  const submitted = complaints.filter(
    (c) => c.status === "Submitted"
  ).length;

  const inProgress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const topComplaints = [...complaints]
    .sort((a, b) => b.upvotes - a.upvotes)
    .slice(0, 5);

  return (
    <div className="warden-dashboard">

      {/* Stats Cards */}
      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total Complaints</h4>
          <h2>{totalComplaints}</h2>
        </div>

        <div className="stat-card">
          <h4>Submitted</h4>
          <h2>{submitted}</h2>
        </div>

        <div className="stat-card">
          <h4>In Progress</h4>
          <h2>{inProgress}</h2>
        </div>

        <div className="stat-card">
          <h4>Resolved</h4>
          <h2>{resolved}</h2>
        </div>

      </div>

      {/* Top Complaints Table */}
      <div className="dashboard-table-card">

        <h2>Top Priority Complaints</h2>

        <table className="dashboard-table">

          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Upvotes</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {topComplaints.map((complaint) => (
              <tr key={complaint.id}>

                <td>{complaint.title}</td>

                <td>{complaint.category}</td>

                <td>
                  <span
                    className={`status-badge ${complaint.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {complaint.status}
                  </span>
                </td>

                <td>
                  <span className="upvote-badge">
                    ↑ {complaint.upvotes}
                  </span>
                </td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/warden/complaints/${complaint.id}`)
                    }
                  >
                    View Details
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;