import { useNavigate } from "react-router-dom";

const ManagerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manager Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={() => navigate("/users")}
          className="p-6 bg-white shadow rounded cursor-pointer hover:bg-blue-50"
        >
          <h3 className="text-lg font-semibold">View Users</h3>
          <p>Read-only users list</p>
        </div>

        <div
          onClick={() => navigate("/projects")}
          className="p-6 bg-white shadow rounded cursor-pointer hover:bg-blue-50"
        >
          <h3 className="text-lg font-semibold">Projects</h3>
          <p>Create & Update projects</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;