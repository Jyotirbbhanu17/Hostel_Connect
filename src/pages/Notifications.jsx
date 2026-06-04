import "../styles/notifications.css";

function Notifications() {
  const notifications = [
    {
      id: 1,
      message: "Your complaint 'Fan Not Working' has been marked In Progress.",
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "A new notice has been posted by the Warden.",
      time: "5 hours ago",
    },
    {
      id: 3,
      message: "Your complaint 'WiFi Issue' has been resolved.",
      time: "1 day ago",
    },
  ];

  return (
    <div className="notifications-page">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-card">
          <div className="notification-icon">🔔</div>

          <div className="notification-content">
            <p>{notification.message}</p>
            <span>{notification.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;