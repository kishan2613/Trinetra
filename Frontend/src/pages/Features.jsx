import React from "react";
import { Shield, Eye, Cpu, Bell, Server, Lock } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen mt-2 bg-black text-white flex flex-col items-center justify-center px-8 py-16">
      <div className="max-w-5xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-purple-500">Trinetra Features</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          Trinetra brings together the power of <span className="text-purple-500">AI</span>, 
          <span className="text-purple-500"> real-time monitoring</span>, and 
          <span className="text-purple-500"> proactive security</span> to keep you safe.  
          Here’s what makes Trinetra unique:
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-purple-700/50 transition">
            <Shield className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Suspicious Detection</h3>
            <p className="text-gray-300">
              AI-powered algorithms detect unusual or suspicious activities in real-time.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-purple-700/50 transition">
            <Eye className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Live CCTV Monitoring</h3>
            <p className="text-gray-300">
              Seamlessly connect and monitor multiple CCTV camera feeds from one dashboard.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-purple-700/50 transition">
            <Cpu className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">AI-Powered Insights</h3>
            <p className="text-gray-300">
              Smart AI learns from data and improves detection accuracy over time.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-purple-700/50 transition">
            <Bell className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Instant Alerts</h3>
            <p className="text-gray-300">
              Get notified instantly about threats via dashboard alerts and push notifications.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-purple-700/50 transition">
            <Server className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Cloud Integration</h3>
            <p className="text-gray-300">
              Securely store surveillance data on the cloud with easy accessibility.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-purple-700/50 transition">
            <Lock className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Data Security</h3>
            <p className="text-gray-300">
              Strong encryption ensures that your surveillance data is private and safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
