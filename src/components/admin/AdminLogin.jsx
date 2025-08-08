import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Mock login validation
    // In a real app, you would send a request to your backend API
    if (formData.email === 'admin@traveldiary.com' && formData.password === 'admin123') {
      // Simulate successful login
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('adminEmail', formData.email);
      navigate('/admin'); // Redirect to admin dashboard
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-white text-center">
          <h1 className="text-3xl font-bold mb-2">Travel Diary</h1>
          <p className="text-primary-50">Admin Portal</p>
        </div>

        {/* Form */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Welcome Back, Admin</h2>
          <p className="text-gray-600 text-center text-sm">Sign in to manage your platform</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition"
                placeholder="admin@traveldiary.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition"
                placeholder="••••••••"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Optional: Forgot Password Link */}
          <div className="text-center">
            <Link to="#" className="text-sm text-primary hover:text-primary-600 transition-colors">
              Forgot your password?
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Travel Diary. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}