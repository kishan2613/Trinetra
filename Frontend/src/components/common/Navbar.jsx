import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons (lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-500">Trinetra</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="/dashboard" className="hover:text-cyan-400 transition">Home</a>
          <a href="/features" className="hover:text-cyan-400 transition">Features</a>
          <a href="/about" className="hover:text-cyan-400 transition">About</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* CTA */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="flex flex-col space-y-4 px-6 py-4 text-gray-300">
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:text-cyan-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
