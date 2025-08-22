import React from "react";
import { Shield, Globe, Video, BarChart3, Bot } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen mt-2 bg-black text-white flex flex-col items-center justify-center px-8 py-16">
      <div className="max-w-4xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-purple-500">About Trinetra</h1>

        {/* Intro */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          <span className="text-purple-400 font-semibold">Trinetra</span> is a 
          next-generation <span className="text-purple-400">AI-powered monitoring</span> 
          and suspicious activity detection platform designed to make communities safer.  
          With intelligent surveillance integration, multilingual support, and 
          real-time alerts, Trinetra empowers individuals, organizations, and 
          law enforcement to respond proactively to security threats.  
        </p>

        {/* Mission */}
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          We aim to bridge the gap between technology and security by making 
          affordable, AI-driven suspicious activity detection accessible to all.  
          Trinetra focuses on <span className="text-purple-400">monitoring, prevention, and community awareness</span> 
          rather than just after-event analysis.  
        </p>

        {/* Features */}
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Key Features</h2>
        <ul className="space-y-4 mb-10 text-left">
          <li className="flex items-center gap-3 text-gray-300">
            <Shield className="w-6 h-6 text-purple-400" /> Smart suspicious activity detection in real-time
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <Globe className="w-6 h-6 text-purple-400" /> Multilingual interface for accessibility
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <Video className="w-6 h-6 text-purple-400" /> Integration with live CCTV camera feeds
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <BarChart3 className="w-6 h-6 text-purple-400" /> User dashboard for device & alert management
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <Bot className="w-6 h-6 text-purple-400" /> AI-powered chatbot for instant support
          </li>
        </ul>

        {/* Why Section */}
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Why Trinetra?</h2>
        <p className="text-gray-300 leading-relaxed">
          Unlike traditional surveillance systems, Trinetra is <span className="text-purple-400">proactive</span>, 
          using AI to identify threats before they escalate.  
          It’s built for <span className="text-purple-400">individual users, communities, and organizations</span> 
          who want better safety at their fingertips — anytime, anywhere.  
        </p>
      </div>
    </div>
  );
};

export default About;
