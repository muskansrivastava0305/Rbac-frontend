import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import UserDashboard from "./UserDashboard";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const role = localStorage.getItem("role");

  return (
    <>
      <Navbar />

      <div className="p-6">
        {role === "admin" && <AdminDashboard />}
        {role === "manager" && <ManagerDashboard />}
        {role === "user" && <UserDashboard />}
      </div>
    </>
  );
};

export default Dashboard;
