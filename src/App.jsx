import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProtectedRoute from "./components/Protectedroute";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* PUBLIC */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD - ALL ROLES */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["admin", "manager", "user"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* USERS - ADMIN + MANAGER */}
        <Route
          path="/userdashboard"
          element={
            <ProtectedRoute roles={["admin", "manager"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* PROJECTS - ALL (actions differ inside page) */}
        <Route
          path="/projects"
          element={
            <ProtectedRoute roles={["admin", "manager", "user"]}>
              <Projects />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </Router>
  );
}

export default App;
