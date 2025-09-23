import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-8 shadow-xl sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-xl animate-fade-in">ShieldSnap India</h1>
        <nav className="flex gap-8 mt-4 sm:mt-0 text-lg font-semibold">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#company-profile" className="hover:underline">Profile</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#certifications" className="hover:underline">Certifications</a>
          <a href="#service-details" className="hover:underline">Details</a>
          <a href="#careers" className="hover:underline">Careers</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
