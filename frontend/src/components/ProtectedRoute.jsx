import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../contextApi/Store';
const ProtectedRoute = ({ children }) => {
  const {
    state: { userInfo },
  } = useContext(Store);
  return userInfo ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
