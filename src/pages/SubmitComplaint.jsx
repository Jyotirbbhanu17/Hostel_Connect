import { useState } from "react";
import "../styles/submitComplaint.css";

function SubmitComplaint() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    severity: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Complaint Submitted");
  };

  return (
    <div className="submit-page">
      <div className="submit-card">
        <h3>Complaint Details</h3>

        <form onSubmit={handleSubmit}>
          <label>Complaint Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter complaint title"
            value={form.title}
            onChange={handleChange}
          />

          <label>Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Internet">Internet</option>
            <option value="Mess">Mess</option>
            <option value="Other">Other</option>
          </select>

          <label>Severity</label>
          <select
            name="severity"
            value={form.severity}
            onChange={handleChange}
          >
            <option value="">Select Severity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <label>Description</label>
          <textarea
            name="description"
            rows="5"
            placeholder="Describe your issue..."
            value={form.description}
            onChange={handleChange}
          />

          <label>Upload Image (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button type="submit" className="submit-btn">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmitComplaint;