import React, { useState } from 'react';

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Top 10 Beaches in Bali', author: 'Nischal', date: '2023-10-15', status: 'Published' },
    { id: 2, title: 'Hiking the Inca Trail', author: 'Smith', date: '2023-10-10', status: 'Draft' },
  ]);

  const [formData, setFormData] = useState({ title: '', author: '', content: '', status: 'Draft' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setBlogs(blogs.map(b => b.id === editId ? { ...b, ...formData } : b));
    } else {
      const newBlog = { id: Date.now(), ...formData, date: new Date().toISOString().split('T')[0] };
      setBlogs([...blogs, newBlog]);
    }
    setFormData({ title: '', author: '', content: '', status: 'Draft' });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (blog) => {
    setFormData({ title: blog.title, author: blog.author, content: blog.content || '', status: blog.status });
    setIsEditing(true);
    setEditId(blog.id);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      {/* Add/Edit Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Blog' : 'Add New Blog'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="5"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-accent text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            {isEditing ? 'Update' : 'Add'} Blog
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => { setFormData({ title: '', author: '', content: '', status: 'Draft' }); setIsEditing(false); setEditId(null); }}
              className="ml-4 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Blogs Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.map(blog => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{blog.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{blog.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${blog.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {blog.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
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