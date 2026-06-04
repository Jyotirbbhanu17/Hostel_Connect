import { useState } from "react";
import "../styles/profile.css";

function Profile() {
  const [profileImage, setProfileImage] = useState(null);

  const student = {
    name: "Jyotirbhanu Sharma",
    email: "jyotirbhanu@gmail.com",
    hostel: "H.Bhabha Hostel",
    Year: "2nd",
    room: "F-18",
    phone: "+91 9876543210",
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
              />
            ) : (
              "👤"
            )}
          </div>

          <div>
            <h2>{student.name}</h2>
            <p>{student.email}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <span>Hostel</span>
            <strong>{student.hostel}</strong>
          </div>

          <div className="profile-item">
            <span>Year</span>
            <strong>{student.Year}</strong>
          </div>

          <div className="profile-item">
            <span>Room</span>
            <strong>{student.room}</strong>
          </div>

          <div className="profile-item">
            <span>Phone</span>
            <strong>{student.phone}</strong>
          </div>
        </div>

        <div className="profile-upload">
          <label>Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;