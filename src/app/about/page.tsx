"use client";
import { useEffect, useState } from "react";
import Navbar from "@/src/component/sections/navbar";
import Footer from "@/src/component/sections/footer";

// Dummy team data (replace with your own or fetch from Firebase)
const team = [
  {
    name: "Vinay Ramkripal Gupta",
    role: "Founder & CEO",
    photo: "/team/vinay.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    photo: "/team/priya.jpg",
  },
  {
    name: "Rahul Mehra",
    role: "Lead Security Officer",
    photo: "/team/rahul.jpg",
  },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    desc: "Quality Management Certified",
    icon: "🏆",
  },
  {
    name: "PSARA",
    desc: "Private Security Agencies Regulation Act",
    icon: "🛡️",
  },
  {
    name: "Best Security Service 2024",
    desc: "National Security Excellence Award",
    icon: "🥇",
  },
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br  from-blue-900 via-gray-900 to-blue-800 min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Company History */}
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">About Shieldsnap Security</h1>
            <p className="text-gray-200 text-lg md:text-xl mb-2">
              Founded in 2005, Shieldsnap Security has grown from a small local team to one of India’s most trusted security partners. With over 20 years of experience, we protect homes, businesses, and communities with integrity and innovation.
            </p>
          </section>
          {/* Mission Statement */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-300 mb-2">Our Mission</h2>
            <p className="text-gray-300 text-base md:text-lg">
              To deliver peace of mind through professional, reliable, and technology-driven security solutions, always putting our clients’ safety first.
            </p>
          </section>
          {/* Core Values */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-300 mb-2">Core Values</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200">
              <li className="bg-blue-900/40 rounded-xl p-4 shadow">
                <span className="font-bold text-blue-400">Trust</span>
                <p className="text-sm mt-2">We build lasting relationships through honesty and transparency.</p>
              </li>
              <li className="bg-blue-900/40 rounded-xl p-4 shadow">
                <span className="font-bold text-blue-400">Professionalism</span>
                <p className="text-sm mt-2">Our team is trained, certified, and committed to excellence.</p>
              </li>
              <li className="bg-blue-900/40 rounded-xl p-4 shadow">
                <span className="font-bold text-blue-400">Innovation</span>
                <p className="text-sm mt-2">We use the latest technology to keep you safe and secure.</p>
              </li>
            </ul>
          </section>
          {/* Team Profiles section removed to avoid duplication with Team page */}
          {/* Certifications & Awards */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Certifications & Awards</h2>
            <div className="flex flex-wrap gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex flex-col items-center bg-blue-900/40 rounded-xl p-4 shadow min-w-[160px] animate-section-in">
                  <span className="text-3xl mb-2">{cert.icon}</span>
                  <span className="font-bold text-blue-200">{cert.name}</span>
                  <span className="text-xs text-gray-300">{cert.desc}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}