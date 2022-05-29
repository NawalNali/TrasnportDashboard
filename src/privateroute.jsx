import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import Topbar from './components/topbar/Topbar'
import Sidebar from "./components/sidebar/Sidebar";

const useAuth = () => {
    const { user } = useContext();
    return user && user.loggedIn;
  };


  const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? (
      <Outlet />
    ) : (
      <Navigate to="/" replace state={{ from: location }} />
    );
  };

  export default ProtectedRoutes;