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
        className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-bold shadow-xl text-lg overflow-hidden transition-all duration-300
        hover:scale-110 hover:shadow-2xl focus:ring-4 focus:ring-blue-400"
      >
        <span className="relative z-10">Contact Us</span>
        {/* Animated background shine */}
        <span
          className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-blue-300/30 via-white/20 to-blue-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
        />
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full group-active:animate-ping bg-blue-400/30 pointer-events-none"></span>
        {/* Arrow icon slide in */}
        <span className="inline-block ml-2 align-middle transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </Link>
    </section>
  );
}