"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-blue-700 animate-section-in"
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-6 text-center">
        Get in Touch with Shieldsnap Security
      </h1>
      <p className="text-gray-300 text-center mb-8 text-lg md:text-xl max-w-xl">
        Ready to secure your business or home? Click below to contact us for a free consultation!
      </p>
      <Link
        href="/contact"
        className="relative group px-10 py-4 rounded-full bg-white/10 backdrop-blur-md border border-blue-400/40 shadow-2xl text-lg font-extrabold text-blue-100 flex items-center gap-3 overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-400 hover:text-white hover:scale-105 focus:ring-4 focus:ring-blue-400 animate-pulse before:absolute before:inset-0 before:rounded-full before:blur-xl before:opacity-60 before:bg-gradient-to-r before:from-blue-400 before:via-blue-600 before:to-blue-400 before:animate-glow"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
      >
        {/* Icon */}
        <svg className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5l-9 5.25L3 10.5" />
        </svg>
        <span className="relative z-10">Contact Us</span>
        {/* Animated background shine */}
        <span
          className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-blue-300/30 via-white/20 to-blue-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg animate-gradient-x"
        />
  {/* Animated glowing border on hover */}
  <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-blue-400/70 opacity-0 group-hover:opacity-100 group-hover:animate-glow-border"></span>
        {/* Arrow icon slide in */}
        <span className="inline-block ml-2 align-middle transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </Link>
    </section>
  );
}