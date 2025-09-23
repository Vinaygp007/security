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
        className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-bold shadow-xl hover:scale-105 transition-all text-lg"
      >
        Contact Us
      </Link>
    </section>
  );
}