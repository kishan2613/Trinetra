import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Eye } from "lucide-react";
import Herov from "../assets/Hero.mp4";
import HeroJ from "../assets/HeroJ.webm";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center text-white overflow-hidden">
      {/* Background Video (Eye Blinking) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src={Herov} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff1,transparent_1px),linear-gradient(to_bottom,#0ff1,transparent_1px)] bg-[size:60px_60px] opacity-20 animate-pulse" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.4,
              scale: 0.5,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, -20],
              opacity: [0.4, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.h1
        className="relative text-6xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Trinetra
      </motion.h1>
      <motion.p
        className="relative mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        AI-powered Suspicious Activity Detection <br /> for Smarter, Safer Spaces
      </motion.p>

      <motion.div
        className="relative mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="/signup">
        <button className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
          Get Started
        </button>
        </Link>
        <button className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const items = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-cyan-400" />,
      title: "24/7 Surveillance",
      desc: "Constant monitoring with AI for real-time threat detection.",
    },
    {
      icon: <Activity className="w-10 h-10 text-purple-400" />,
      title: "Behavior Analysis",
      desc: "Detects unusual activities and suspicious movement patterns.",
    },
    {
      icon: <Eye className="w-10 h-10 text-pink-400" />,
      title: "Smart Alerts",
      desc: "Instant alerts for quick action and improved safety.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 relative z-10">
         
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Why Trinetra?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="bg-gray-950 text-gray-300 py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">About Trinetra</h2>
        <p className="mt-6 text-lg leading-relaxed">
          Trinetra is an advanced AI-powered surveillance system that goes beyond
          traditional CCTV. It monitors real-time video feeds, detects unusual
          activities, and sends instant alerts, enabling smarter and safer
          environments for communities, organizations, and cities.
        </p>
      </div>
    </section>
  );
};

const FooterCTA = () => {
  return (
   <footer className="relative bg-black text-white py-16 overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-70 p-8"
  >
    <source src={HeroJ} type="video/mp4" />
  </video>

  {/* Overlay (optional, for readability) */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Foreground content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold">Ready to Secure Your Space?</h2>
    <p className="mt-4 text-gray-300">
      Join the future of intelligent surveillance today.
    </p>
    <div className="mt-6 flex justify-center gap-4">
      <button className="px-8 py-4 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition">
        Request Demo
      </button>
      <button className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition">
        Contact Us
      </button>
    </div>
    <p className="mt-8 text-gray-400 text-sm">
      © {new Date().getFullYear()} Trinetra. All rights reserved.
    </p>
  </div>
</footer>

  );
};

const Home = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Hero />
      <Features />
      <About />
      <FooterCTA />
    </div>
  );
};

export default Home;
