import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useToken } from '@/utils/contexts/token';

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { token } = useToken();

  const authProtected = ["/login", "/register"]
  const tokenProtected = ["/profile"]

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />
}

export default ProtectedRoutes