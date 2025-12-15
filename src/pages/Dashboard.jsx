import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import UserDashboard from "./UserDashboard";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const role = localStorage.getItem("role");

  const renderDashboard = () => {
    switch (role) {
      case "admin":
        return <AdminDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "user":
        return <UserDashboard />;
      default:
        return <Navigate to="/not-authorized" replace />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        {renderDashboard()}
      </div>
    </>
  );
};

export default Dashboard;
