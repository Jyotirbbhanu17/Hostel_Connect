import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/submit-complaint": "Submit Complaint",
  "/my-complaints": "My Complaints",
  "/notices": "Notices",
  "/notifications": "Notifications",
  "/profile": "Profile",
};

function StudentLayout() {
  const location = useLocation();

  return (
    <div className="hc-app">
      <Sidebar />

      <div className="hc-main">
        <header className="hc-topbar">
          <h1 className="hc-title">
            {PAGE_TITLES[location.pathname]}
          </h1>

          <div className="hc-top-actions">
            <button className="icon-btn">🔔</button>
            <button className="admin-btn">Jyotirbhanu</button>
          </div>
        </header>

        <main className="hc-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default StudentLayout;