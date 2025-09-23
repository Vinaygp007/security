"use client";
import { FaShieldAlt, FaUserShield, FaCamera, FaBolt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 bg-gradient-to-tr from-blue-900 via-black to-purple-900">
      {/* Diagonal split background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1920 600" className="absolute top-0 left-0">
          <polygon points="0,0 1920,0 1920,400 0,600" fill="url(#bgGradient)" />
          <defs>
            <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Floating shield logo */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 z-10">
        <FaShieldAlt className="text-blue-400 text-[120px] drop-shadow-2xl animate-bounce" />
      </div>
      {/* Main card */}
      <div className="relative z-20 bg-black/70 backdrop-blur-2xl rounded-3xl shadow-2xl px-10 py-14 flex flex-col items-center max-w-2xl mx-auto border border-blue-500/30 animate-section-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x mb-6 drop-shadow-xl">
          Welcome to SecureGuard
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 text-center animate-fade-in">
          <span className="font-bold text-blue-400">India’s #1 Security Partner</span> <br />
          Experience next-level protection for your home, business, and community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full">
          <div className="flex flex-col items-center">
            <FaUserShield className="text-blue-400 text-3xl mb-2 animate-bounce" />
            <span className="text-base text-gray-100 font-semibold">On-Site Guards</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCamera className="text-pink-400 text-3xl mb-2 animate-pulse" />
            <span className="text-base text-gray-100 font-semibold">Smart Surveillance</span>
          </div>
          <div className="flex flex-col items-center">
            <FaBolt className="text-green-400 text-3xl mb-2 animate-spin-slow" />
            <span className="text-base text-gray-100 font-semibold">Rapid Response</span>
          </div>
        </div>
        <a href="#contact" className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-700 to-purple-500 text-white font-bold shadow-xl hover:scale-105 transition-all animate-pulse text-lg">
          Get Your Free Quote
        </a>
      </div>
    </section>
  );
}