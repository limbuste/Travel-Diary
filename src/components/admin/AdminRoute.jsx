import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const isAdmin = () => {
  return localStorage.getItem('isAdmin') === 'true';
};

export default function AdminRoute({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminEmail');
    navigate('/admin-login'); 
  };

  return isAdmin() ? (
    React.cloneElement(children, { onLogout: handleLogout })
  ) : (
    <Navigate to="/admin-login" />
  );
}