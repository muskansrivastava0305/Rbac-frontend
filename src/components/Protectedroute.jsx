// import { Navigate } from 'react-router-dom';

// export default function ProtectedRoute({children,roles}){
//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');
//     if(!token) return <Navigate to="/" />;
//     if(roles && !roles.includes(role)) return <h1>Not authorized</h1>;
//     return children;
// }

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Role not allowed
  if (roles && !roles.includes(role)) {
    return <h1 className="text-center mt-10 text-red-500">Not Authorized</h1>;
  }

  return children;
};

export default ProtectedRoute;
