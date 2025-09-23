"use client";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-gradient-to-r from-black via-blue-900 to-gray-900 text-white shadow-inner mt-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-extrabold text-blue-400 mb-2">SecureGuard India</span>
          <span className="flex items-center gap-2 text-sm text-gray-300">
            <FaMapMarkerAlt /> Mumbai, India
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-300">
            <FaEnvelope /> info@secureguard.in
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-300">
            <FaPhoneAlt /> +91 98765 43210
          </span>
        </div>
        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors text-2xl"><FaLinkedin /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors text-2xl"><FaTwitter /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors text-2xl"><FaFacebook /></a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} SecureGuard India. All rights reserved.
      </div>
    </footer>
  );
}