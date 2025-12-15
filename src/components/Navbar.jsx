import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">RBAC Dashboard</h1>

      <div className="flex gap-4 items-center">
        <span className="capitalize">{role}</span>
        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
