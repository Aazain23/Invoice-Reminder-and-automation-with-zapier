import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authToken } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={authToken ? <Component {...rest} /> : <Navigate to="/" />}
    />
  );
};

export default ProtectedRoute;
