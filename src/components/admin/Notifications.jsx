import React, { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New user signed up: John Doe', time: '2 minutes ago', read: false },
    { id: 2, message: 'Blog post requires review: "Top 10 Beaches"', time: '1 hour ago', read: true },
    { id: 3, message: 'System update scheduled for tonight', time: '3 hours ago', read: true },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      <div className="space-y-4">
        {notifications.map(notif => (
          <div
            key={notif.id}
            className={`p-4 rounded-lg border-l-4 ${notif.read ? 'bg-white border-gray-300' : 'bg-blue-50 border-blue-500'}`}
          >
            <div className="flex justify-between">
              <p className={notif.read ? 'text-gray-700' : 'text-gray-900 font-medium'}>
                {notif.message}
              </p>
              <div className="flex space-x-2">
                {!notif.read && (
                  <button
                    onClick={() => markAsRead(notif.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Mark Read
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notif.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}