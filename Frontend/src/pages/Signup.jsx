import React, { useState } from "react";
import HeroJ from "../assets/HeroJ.webm";
import { Link } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    detectionTypes: [], // multiple selections
  });

  const detectionOptions = [
    "Intruder Detection",
    "Loitering Detection",
    "Weapon Detection",
    "Abandoned Object Detection",
    "Crowd Detection",
    "Vehicle Anomaly Detection",
  ];

  // Toggle selection
  const handleSelect = (option) => {
    setFormData((prev) => {
      if (prev.detectionTypes.includes(option)) {
        return {
          ...prev,
          detectionTypes: prev.detectionTypes.filter((item) => item !== option),
        };
      } else {
        return { ...prev, detectionTypes: [...prev.detectionTypes, option] };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Signup successful!\nSelected: ${formData.detectionTypes.join(", ")}`);
  };

  return (
    <div className="min-h-screen flex mt-18">

      {/* Left Side - Video & Text */}
      <div className="relative w-[60%] hidden lg:flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={HeroJ} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Cool Text */}
        <div className="relative z-10 p-12 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Your Eyes, Our Intelligence
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-md mx-auto">
            Experience the next generation of AI-powered surveillance and stay
            one step ahead of suspicious activity.
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-black px-6 p-4">
        <div className="w-full max-w-md bg-gray-900/80 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Sign Up for Trinetra
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            {/* Detection Types - Button Selector */}
            <div>
              <label className="block text-gray-300 mb-3">
                Suspicious Detection Types
              </label>
              <div className="flex flex-wrap gap-3">
                {detectionOptions.map((option, idx) => {
                  const isSelected = formData.detectionTypes.includes(option);
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => handleSelect(option)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition 
                        ${
                          isSelected
                            ? "bg-purple-600 text-white border-purple-500"
                            : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
                        }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <Link to="/dashboard">
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition"
            >
              Sign Up
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
