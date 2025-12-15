import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={() => navigate("/users")}
          className="p-6 bg-white shadow rounded cursor-pointer hover:bg-blue-50"
        >
          <h3 className="text-lg font-semibold">User Management</h3>
          <p>View all users & manage access</p>
        </div>

        <div
          onClick={() => navigate("/projects")}
          className="p-6 bg-white shadow rounded cursor-pointer hover:bg-blue-50"
        >
          <h3 className="text-lg font-semibold">Project Management</h3>
          <p>Create, Update, Delete projects</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
