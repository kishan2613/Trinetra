import React, { useState } from "react";

const Dashboard = () => {
  const [cams, setCams] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    streamUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCams([...cams, formData]);
    setFormData({ name: "", location: "", streamUrl: "" });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen mt-16 bg-black text-white">

      {/* User Info Section */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-gray-900/80 rounded-xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Welcome, Kishan Kumar 👋</h2>
          <p className="text-gray-400">User ID: #TRI-90872</p>
          <p className="text-gray-400">Cams : 4</p>
          <p className="text-gray-400">Selected Actions: Road Rage,</p>
        </div>

        {/* Add Cam Button */}
        <div className="mt-8 flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Connected Cameras</h3>
          <button
            onClick={() => setShowForm(true)}
            className="px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
          >
            + Add Cam
          </button>
        </div>

        {/* Camera Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cams.length === 0 ? (
            <p className="text-gray-400">No cameras added yet.</p>
          ) : (
            cams.map((cam, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-4 rounded-xl border border-gray-700"
              >
                <h4 className="text-xl font-semibold">{cam.name}</h4>
                <p className="text-gray-400">📍 {cam.location}</p>
                <p className="text-sm text-gray-500 truncate">
                  🔗 {cam.streamUrl}
                </p>
                <div className="mt-3 bg-black rounded-lg overflow-hidden h-40 flex items-center justify-center text-gray-600">
                  {/* Later replace with <video src={cam.streamUrl} /> */}
                  Live Feed Placeholder
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Add CCTV Camera</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-300 mb-1">Camera Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-300 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              {/* Stream URL */}
              <div>
                <label className="block text-gray-300 mb-1">Stream URL</label>
                <input
                  type="url"
                  name="streamUrl"
                  value={formData.streamUrl}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500"
                >
                  Add Cam
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
