// import HeroSection from './components/HeroSection';
// import CommunitySection from './components/CommunitySection';
// import FeaturesSection from './components/FeaturesSection';
// import PopularTravelersSection from './components/PopularTravelersSection';
// import PricingSection from './components/PricingSection';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div id="travel-diary">
//       <HeroSection />
//       <CommunitySection />
//       <FeaturesSection />
//       <PopularTravelersSection />
//       <PricingSection />
//       <Footer />
//     </div>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import AdminRoute from './components/admin/AdminRoute';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageUsers from './components/admin/ManageUsers';
import ManageBlogs from './components/admin/ManageBlogs';
import ManageDestinations from './components/admin/ManageDestinations';
import Notifications from './components/admin/Notifications';
import HeroSection from './components/HeroSection';
import CommunitySection from './components/CommunitySection';
import FeaturesSection from './components/FeaturesSection';
import PopularTravelersSection from './components/PopularTravelersSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

// For demo: Simulate login
const AdminLogin = () => (
  <div className="flex items-center justify-center h-screen">
    <button
      onClick={() => {
        localStorage.setItem('isAdmin', 'true');
        window.location.href = '/admin';
      }}
      className="bg-accent text-white px-8 py-3 rounded-full"
    >
      Login as Admin
    </button>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <div id="travel-diary">
         <HeroSection />
         <CommunitySection />
         <FeaturesSection />
         <PopularTravelersSection />
         <PricingSection />
         <Footer />
       </div>

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout>
                <Routes>
                  <Route index element={<AdminDashboard />} />
                  <Route path="users" element={<ManageUsers />} />
                  <Route path="blogs" element={<ManageBlogs />} />
                  <Route path="destinations" element={<ManageDestinations />} />
                  <Route path="notifications" element={<Notifications />} />
                </Routes>
              </AdminLayout>
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}