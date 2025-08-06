import React, { useState } from 'react';

export default function ManageDestinations() {
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Bhaktapur Durbar Square', location: 'Nepal', price: '4000 NRS' },
    { id: 2, name: 'Pokhara', location: 'Nepal', price: '5000 NRS' },
  ]);

  const [formData, setFormData] = useState({ name: '', location: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setDestinations(destinations.map(d => d.id === editId ? { ...d, ...formData } : d));
    } else {
      const newDest = { id: Date.now(), ...formData };
      setDestinations([...destinations, newDest]);
    }
    setFormData({ name: '', location: '', price: '' });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (dest) => {
    setFormData({ name: dest.name, location: dest.location, price: dest.price });
    setIsEditing(true);
    setEditId(dest.id);
  };

  const handleDelete = (id) => {
    setDestinations(destinations.filter(d => d.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Destinations</h1>

      {/* Add/Edit Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Destination' : 'Add New Destination'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="eg: 4000 NRS"
            />
          </div>
          <button
            type="submit"
            className="bg-accent text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            {isEditing ? 'Update' : 'Add'} Destination
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => { setFormData({ name: '', location: '', price: '' }); setIsEditing(false); setEditId(null); }}
              className="ml-4 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Destinations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {destinations.map(dest => (
              <tr key={dest.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{dest.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dest.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dest.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(dest)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(dest.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}