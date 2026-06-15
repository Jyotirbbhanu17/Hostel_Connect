import { useState } from "react";
import "../../styles/wardenProfile.css";

function Profile() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="warden-profile-page">
  <div className="warden-profile-card">

    <div className="warden-profile-header">

      <div className="warden-profile-avatar">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="warden-profile-image"
          />
        ) : (
          "👨‍💼"
        )}
      </div>

      <div>
        <h2>Hostel Warden</h2>
        <p>Chief Warden</p>
      </div>

    </div>

    <div className="warden-profile-details">

  <div className="warden-profile-item">
    <span>Email</span>
    <strong>warden@hostelconnect.com</strong>
  </div>

  <div className="warden-profile-item">
    <span>Phone</span>
    <strong>+91 9876543210</strong>
  </div>

  <div className="warden-profile-item">
    <span>Hostel Assigned</span>
    <strong>C.V. Raman Hostel</strong>
  </div>

  <div className="warden-profile-item">
    <span>Role</span>
    <strong>Chief Warden</strong>
  </div>

  <div className="warden-profile-item">
    <span>Total Complaints Handled</span>
    <strong>124</strong>
  </div>

  <div className="warden-profile-item">
    <span>Resolved Complaints</span>
    <strong>98</strong>
  </div>

</div>

    <div className="warden-profile-upload">

  <label
    htmlFor="profile-upload"
    className="upload-btn"
  >
    Change Profile Picture
  </label>

  <input
    id="profile-upload"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    hidden
  />

</div>

    <button className="edit-btn">
      Edit Profile
    </button>

  </div>
</div>

  );
}

export default Profile;