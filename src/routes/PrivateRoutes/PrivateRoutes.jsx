import { useContext } from "react";
import PropTypes from "prop-types";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  // getting the states using context api
  const { user, loading } = useContext(AuthContext);
  //   if loading then show spinner
  if (loading) {
    return (
      <div className="flex items-start justify-center h-screen">
        <span className="block loading loading-spinner loading-lg text-[#6C2C70]"></span>
      </div>
    );
  } else {
    // if user information is not available then return user to login else let user pass
    if (!user) {
      return <Navigate state={location.pathname} to="/login"></Navigate>;
    } else {
      return children;
    }
  }
};
// prop types validation
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
