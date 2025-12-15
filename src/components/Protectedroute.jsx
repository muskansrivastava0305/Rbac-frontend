import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children,roles}){
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if(!token) return <Navigate to="/" />;
    if(roles && !roles.includes(role)) return <h1>Not authorized</h1>;
    return children;
}
