import { useState } from "react";
import noticesData from "../../data/notices";
import "../../styles/wardenNotices.css";

function Notices() {
  const [notices, setNotices] = useState(noticesData);

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePublish = () => {
    if (!form.title || !form.content) {
      alert("Fill all fields");
      return;
    }

    const newNotice = {
      id: Date.now(),
      title: form.title,
      content: form.content,
      author: "Hostel Warden",
      date: new Date().toISOString().split("T")[0],
    };

    setNotices([newNotice, ...notices]);

    setForm({
      title: "",
      content: "",
    });
  };

  return (
    <div className="notices-page">

      {/* Create Notice */}

      <div className="notice-form-card">

        <h2>Create Notice</h2>

        <input
          type="text"
          name="title"
          placeholder="Notice Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="content"
          rows="5"
          placeholder="Write notice content..."
          value={form.content}
          onChange={handleChange}
        />

        <button
          className="publish-btn"
          onClick={handlePublish}
        >
          Publish Notice
        </button>

      </div>

      {/* View Notices */}

      <div className="notice-list-card">

        <h2>All Notices</h2>

        {notices.map((notice) => (
          <div
            key={notice.id}
            className="notice-card"
          >
            <h3>{notice.title}</h3>

            <p>{notice.content}</p>

            <div className="notice-meta">
              <span>{notice.author}</span>
              <span>{notice.date}</span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Notices;