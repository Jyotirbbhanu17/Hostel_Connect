import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLayout from "./layouts/StudentLayout";
import Dashboard from "./pages/Dashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import MyComplaints from "./pages/MyComplaints";
import Notices from "./pages/Notices";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StudentLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submit-complaint" element={<SubmitComplaint />} />
          <Route path="/my-complaints" element={<MyComplaints />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 