import { useEffect, useState } from "react";
import API from "../api";

const UserDashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get("/users/me").then(res => setProfile(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>

      {profile && (
        <div className="bg-white p-6 shadow rounded mb-6">
          <h3 className="font-semibold">My Profile</h3>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Role: {profile.role}</p>
        </div>
      )}

      <div
        onClick={() => window.location.href = "/projects"}
        className="p-6 bg-white shadow rounded cursor-pointer hover:bg-blue-50"
      >
        <h3 className="text-lg font-semibold">View Projects</h3>
        <p>Read-only access</p>
      </div>
    </div>
  );
};

export default UserDashboard;
