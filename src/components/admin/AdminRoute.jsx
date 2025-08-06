import React from 'react';
import { Navigate } from 'react-router-dom';

// Simple mock auth check - replace with real token check
const isAdmin = () => {
  return localStorage.getItem('isAdmin') === 'true'; // Example
};

export default function AdminRoute({ children }) {
  return isAdmin() ? children : <Navigate to="/login" />;
}