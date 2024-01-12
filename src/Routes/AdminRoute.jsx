import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const { user, loader } = useAuth();
    const [isAdmin ,isAdminLoading] = useAdmin();
    const location = useLocation();
    
    
  if (loader || isAdminLoading) {
    return (
      <h1 className="text-5xl font-bold flex h-screen items-center justify-center">
        <span className="loading loading-spinner text-error w-40"></span>
      </h1>
    );
    }


    if (user || isAdmin) {
        return children;
    }

//   if (!user || !isAdmin) {
//     return <Navigate state={location.pathname} to="/login"></Navigate>;
//     }

     return <Navigate state={location.pathname} to="/login"></Navigate>;


};


AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default AdminRoute;