import { useState } from "react";
import { useNavigate } from "react-router-dom";
import complaints from "../../data/complaints";
import "../../styles/manageComplaints.css";

function ManageComplaints() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [severity, setSeverity] = useState("All");
  const [sortBy, setSortBy] = useState("Most Upvoted");

  let filteredComplaints = [...complaints];

  if (category !== "All") {
    filteredComplaints = filteredComplaints.filter(
      (c) => c.category === category
    );
  }

  if (status !== "All") {
    filteredComplaints = filteredComplaints.filter(
      (c) => c.status === status
    );
  }

  if (severity !== "All") {
    filteredComplaints = filteredComplaints.filter(
      (c) => c.severity === severity
    );
  }

  if (sortBy === "Most Upvoted") {
    filteredComplaints.sort((a, b) => b.upvotes - a.upvotes);
  }

  if (sortBy === "Newest") {
    filteredComplaints.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  if (sortBy === "Oldest") {
    filteredComplaints.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }

  return (
    <div className="manage-complaints-page">

      {/* Filters Section */}
      <div className="filters-card">
        <h3>Filter Complaints</h3>

        <div className="filters-row">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Mess">Mess</option>
            <option value="Internet">Internet</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Submitted">Submitted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>

          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="All">All Severity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Most Upvoted">Most Upvoted</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>

        </div>
      </div>

      {/* Complaints Table */}
      <div className="complaints-table-card">

        <table className="complaints-table">

          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Severity</th>
              <th>Upvotes</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredComplaints.map((complaint) => (
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

                <td>{complaint.severity}</td>

                <td>
                  <span className="upvote-badge">
                    ↑ {complaint.upvotes}
                  </span>
                </td>

                <td>{complaint.date}</td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(
                        `/warden/complaints/${complaint.id}`
                      )
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

export default ManageComplaints;