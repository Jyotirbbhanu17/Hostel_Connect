import { useState } from "react";
import "../styles/myComplaints.css";

function MyComplaints() {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const complaints = [
    {
      id: 1,
      title: "Fan Not Working",
      category: "Electrical",
      status: "In Progress",
      severity: "High",
      Upvotes:"40",
      date: "03/06/2026",
    },
    {
      id: 2,
      title: "WiFi Issue",
      category: "Internet",
      status: "Submitted",
      severity: "Medium",
      Upvotes:"25",
      date: "02/06/2026",
    },
    {
      id: 3,
      title: "Mess Food Quality",
      category: "Mess",
      status: "Resolved",
      severity: "Low",
      Upvotes:"15",
      date: "30/05/2026",
    },
  ];

  const filteredComplaints = complaints.filter((complaint) => {
    const categoryMatch =
      category === "" || complaint.category === category;

    const statusMatch =
      status === "" || complaint.status === status;

    return categoryMatch && statusMatch;
  });

  return (
    <section className="hc-recent">
      <div className="filter-bar">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electrical">Electrical</option>
          <option value="Internet">Internet</option>
          <option value="Mess">Mess</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Submitted">Submitted</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="table-wrap">
        <table className="hc-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Severity</th>
              <th>Upvotes</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredComplaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.title}</td>
                <td>{complaint.category}</td>

                <td>
                  <span
                    className={`status-badge ${
                      complaint.status === "Resolved"
                        ? "badge-resolved"
                        : complaint.status === "In Progress"
                        ? "badge-pending"
                        : "badge-default"
                    }`}
                  >
                    {complaint.status}
                  </span>
                </td>

                <td>{complaint.severity}</td>

<td>
  <button className="upvote-btn">
    ⬆ {complaint.Upvotes}
  </button>
</td>

<td>{complaint.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MyComplaints;