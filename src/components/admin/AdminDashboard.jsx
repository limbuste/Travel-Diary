import React from 'react';

export default function AdminDashboard() {
  // Mock stats
  const stats = [
    { label: 'Total Users', value: '1,234', icon: 'group', color: 'bg-blue-500' },
    { label: 'Total Blogs', value: '89', icon: 'article', color: 'bg-green-500' },
    { label: 'Destinations', value: '45', icon: 'location_on', color: 'bg-purple-500' },
    { label: 'Pending Reviews', value: '12', icon: 'rate_review', color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
                <span className="material-symbols-outlined"> {stat.icon} </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="text-sm text-gray-600">User "John Doe" signed up</li>
          <li className="text-sm text-gray-600">New blog post published: "Top 10 Beaches in Bali"</li>
          <li className="text-sm text-gray-600">Destination "Machu Picchu" updated</li>
        </ul>
      </div>
    </div>
  );
}