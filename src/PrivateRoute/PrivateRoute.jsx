import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthProviderInfo } from "../Provider/AuthProvider/AuthProvider";
import Spinner from "../components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProviderInfo);
  const location = useLocation();

  // loader
  if (loading) {
    return <Spinner></Spinner>;
  }
  // user state
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
