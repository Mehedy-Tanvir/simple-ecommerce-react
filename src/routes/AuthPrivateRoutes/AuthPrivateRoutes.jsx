import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import PropTypes from "prop-types";

const AuthPrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-start justify-center h-screen">
        <span className="block loading loading-spinner loading-lg text-[#6C2C70]"></span>
      </div>
    );
  } else {
    if (user) {
      return <Navigate state={location.pathname} to="/"></Navigate>;
    } else {
      return children;
    }
  }
};
AuthPrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default AuthPrivateRoutes;
