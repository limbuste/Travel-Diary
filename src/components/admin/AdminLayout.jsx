import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (props.onLogout) {
    props.onLogout();
  } else {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminEmail');
    navigate('/admin-login');
  }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-primary">Travel Diary</h1>
          <p className="text-sm text-gray-500">Admin Panel</p>
        </div>
        <nav className="p-4 space-y-2">
          <Link to="/admin" className="block px-4 py-2 text-gray-700 hover:bg-accent hover:text-white rounded transition">
            Dashboard
          </Link>
          <Link to="/admin/users" className="block px-4 py-2 text-gray-700 hover:bg-accent hover:text-white rounded transition">
            Manage Users
          </Link>
          <Link to="/admin/blogs" className="block px-4 py-2 text-gray-700 hover:bg-accent hover:text-white rounded transition">
            Manage Blogs
          </Link>
          <Link to="/admin/destinations" className="block px-4 py-2 text-gray-700 hover:bg-accent hover:text-white rounded transition">
            Manage Destinations
          </Link>
          <Link to="/admin/notifications" className="block px-4 py-2 text-gray-700 hover:bg-accent hover:text-white rounded transition">
            Notifications
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Admin Portal</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}